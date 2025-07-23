 // Slider otomatis
  let index = 0;
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  const imageWidth = 320;

  function slide() {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    slider.style.transform = `translateX(-${index * imageWidth}px)`;
  }

  setInterval(slide, 3000); // setiap 3 detik ganti slide

  // Kategori aktif + indikator pindah
  const categoryItems = document.querySelectorAll('.category-item');
  const categorySlider = document.getElementById("categorySlider");
  const indicator = document.getElementById("categoryIndicator");

  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Hapus class active dari semua
      categoryItems.forEach((el) => el.classList.remove("active"));
      // Tambahkan ke yang diklik
      item.classList.add("active");

      // Pindahkan indikator ke elemen aktif
      const offsetLeft = item.offsetLeft - categorySlider.scrollLeft;
      const itemWidth = item.offsetWidth;
      indicator.style.left = offsetLeft + "px";
      indicator.style.width = itemWidth + "px";
    });
  });

  // Saat pertama kali halaman dibuka
  window.addEventListener('DOMContentLoaded', () => {
    const firstItem = categoryItems[0];
    firstItem.classList.add("active");
    indicator.style.left = firstItem.offsetLeft + "px";
    indicator.style.width = firstItem.offsetWidth + "px";
  });
