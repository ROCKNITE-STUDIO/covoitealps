document.addEventListener('DOMContentLoaded', () => {
    const btnReload = document.getElementById('btn-reload');

    if (btnReload) {
        btnReload.addEventListener('click', () => {
            fetch('/data.json', { cache: 'reload' })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erreur lors du chargement du fichier JSON');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Fichier data.json rechargé');
                    location.reload(); // Recharge la page après avoir récupéré les données
                })
                .catch(error => {
                    console.error('Erreur:', error);
                });
        });
    }
});
