document.addEventListener("DOMContentLoaded", function() {
    fetch("/trajets")
        .then(response => response.json())
        .then(trajets => {
            let trajetHTML = trajets.map(trajet => 
                `<p>${trajet.nom_conducteur} - ${trajet.depart} - dans ${trajet.temps_restants}h</p>`).join("");
            document.getElementById("trajets").innerHTML = trajetHTML;
        });
});

function loadNavbar() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => document.getElementById("nav-placeholder").innerHTML = data);
}
