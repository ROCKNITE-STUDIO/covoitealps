// script.js (je crois)
console.log('ROCKNITE STUDIO par MOI (Satanas1275)')

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const resultContainer = document.querySelector('.result');
            resultContainer.innerHTML = '';

            data.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'container';
                itemDiv.dataset.id = item.id;

                const name = document.createElement('h2');
                name.textContent = `${item.name}`;
                itemDiv.appendChild(name);

                const destination = document.createElement('p');
                destination.textContent = `${item.lieu}`;
                itemDiv.appendChild(destination);

                const dispo = document.createElement('p');
                dispo.textContent = `Disponible : ${item.GensDispo}`;
                itemDiv.appendChild(dispo);

                itemDiv.addEventListener('click', () => {

                    window.location.href = `pas_idee_donc_voila/index.html?id=${item.id}`;
                });

                resultContainer.appendChild(itemDiv);
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
