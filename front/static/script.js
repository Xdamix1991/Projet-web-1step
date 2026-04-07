const divAffichage = document.getElementById('listesApprenants')
const divAffichageCards = document.getElementById('cardsApprenants')
const affichageAcceuil = document.getElementById('affichageAcc')

let etudiants;

async function init() {
    const res = await fetch('/Projet-web-1step/front/assets/promo.json');
    if (!res.ok) {
        const message = `An error has occured: ${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    etudiants = data.apprenants;

    const saved = localStorage.getItem('affichage');
    if (saved) {
        document.querySelector(
        `input[name="TypeAffichages"][value="${saved}"]`
    ).checked = true;
}
/* afaire
    const theme = localStorage.getItem('theme')
    if (theme == 'sombre') {

    }
    else {

    }
        */

    typeAffichage()
}
init()

//type d affichage Set

affichageAcceuil.addEventListener('change', () => {
    const value = affichageAcceuil.TypeAffichages.value

    localStorage.setItem("affichage", value)

    typeAffichage()
})



//REcuperation des etuadiants 





//fonction pour affichage en Liste (Tableau)
function affichageListe (){

const table = document.createElement('table')

table.innerHTML = `
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Ville</th>
                    <th>Détails</th>
                </tr>
            </thead>
            <tbody id="table-body"></tbody>
        `

const tbody = table.querySelector('#table-body')
etudiants.forEach(etudiant => {
    const tr = document.createElement('tr')
    tr.innerHTML =`
                <td>${etudiant.nom}</td>
                <td>${etudiant.prenom}</td>
                <td>${etudiant.ville}</td>
                <td>${etudiant.coordonnees.latitude, etudiant.coordonnees.longitude}</td>
                <td><a href="#">details</a></td>
    
    `
    tbody.appendChild(tr)
});

divAffichage.appendChild(table)


}



// Fonction pour affichage en Cards
function affichageCards () {


etudiants.forEach(etudiant => {

    const cards = document.createElement('article')
    cards.innerHTML = `
                <header>
                    <div>
                        <h3>${etudiant.nom}</h3>
                        <h4>${etudiant.prenom}</h4>
                    </div>
                    <img id="avatar" src="/Projet-web-1step/front/assets/avatar.png" alt="">
                </header>

            <div class="content">
                <p>${etudiant.anecdotes}</p>
                <a href="#">details</a>
            </div>
    `

divAffichageCards.appendChild(cards)
})

}

//verification de type d affichage souhaité
function typeAffichage () {

    const affichages = localStorage.getItem('affichage')
    console.log(affichages)

    //netoie pour eviter la duplicatiuon

    divAffichage.innerHTML = "";
    divAffichageCards.innerHTML = "";

    if (affichages == "cartes") {
        affichageCards ()
    }
   else {
        affichageListe()
    }

}

//verification de type d affichage souhaité


//gestion des types d'affichages sauvegardés
console.log(etudiants)



//lacarte 

let map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);