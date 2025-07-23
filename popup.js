function openModal() {
  document.getElementById("gameModal").style.display = "block";
}

function closeModal() {
  document.getElementById("gameModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("gameModal");
  if (event.target === modal) {
    closeModal();
  }
}

  // Kategori switch
  document.addEventListener("DOMContentLoaded", function () {
    const categoryItems = document.querySelectorAll('.category-item');
    const gameCards = document.querySelector('.game-cards');
    const pulsaCards = document.querySelector('.pulsa-cards');

    categoryItems.forEach(item => {
      item.addEventListener('click', () => {
        const category = item.textContent.trim().toLowerCase();

        if (category === 'pulsa') {
          gameCards.style.display = 'none';
          pulsaCards.style.display = 'flex';
        } else {
          gameCards.style.display = 'flex';
          pulsaCards.style.display = 'none';
        }
      });
    });
  });
