// Charger et afficher les actualités
document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('news-container');

  // Fonction pour charger les actualités depuis le JSON
  fetch('news.json')
    .then(response => response.json())
    .then(news => {
      news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        newsItem.innerHTML = `
          <h2 class="news-title">${item.title}</h2>
          <p class="news-date">${item.date}</p>
          <p class="news-content">${item.content}</p>
        `;

        newsContainer.appendChild(newsItem);
      });
    })
    .catch(error => {
      console.error("Erreur lors du chargement des actualités :", error);
      newsContainer.innerHTML = "<p>Impossible de charger les actualités pour le moment.</p>";
    });
});
