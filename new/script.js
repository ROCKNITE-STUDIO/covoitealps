document.getElementById('exportButton').addEventListener('click', () => {
    // Récupérer les valeurs des champs de formulaire
    const lieu = document.getElementById('lieu').value;
    const name = document.getElementById('name').value;  // Changement ici

    // Vérifier que les champs ne sont pas vides
    if (!lieu || !name) {  // Changement ici
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Créer l'objet JSON avec les données du formulaire
    const data = {
        lieu: lieu,
        name: name  // Changement ici
    };

    // Envoyer les données au serveur via une requête POST
    fetch('https://institutum.serveo.net/add-point', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Réponse réseau non ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.status === 'success') {
            alert(data.message);
            // Redirection après succès
            window.location.href = 'https://covoitealps.serveo.net';
        } else {
            throw new Error('Erreur côté serveur : ' + data.message);
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    });
});
