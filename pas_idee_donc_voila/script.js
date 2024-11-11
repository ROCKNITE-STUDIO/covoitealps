

document.addEventListener('DOMContentLoaded', function() {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    console.log('voici l\'id : '+ (id))

    if (!id) {
        document.getElementById('destination-info').innerText = 'ID non spécifié dans l\'URL';
        return;
    }

    fetch('https://covoitealps.serveo.net/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier JSON');
            }
            return response.json();
        })
        .then(data => {
            const item = data.find(obj => obj.id === id);

            if (item) {
                const infoDiv = document.getElementById('destination-info');
                infoDiv.innerHTML = `
                    <p>Lieu: ${item.lieu}</p>
                    <p>Nombre de personnes disponibles: ${item.GensDispo}</p>
                `;
            } else {
                document.getElementById('destination-info').innerText = 'Aucune destination trouvée pour cet ID';
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            document.getElementById('destination-info').innerText = 'Erreur de chargement des données';
        });
});
