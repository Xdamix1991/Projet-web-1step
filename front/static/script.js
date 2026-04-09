const divAffichage = document.getElementById('listesApprenants')
const divAffichageCards = document.getElementById('cardsApprenants')
const affichageAcceuil = document.getElementById('affichageAcc')
import { affichageModal } from "./modal.js";




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
                <td><a href="carte.html" id="open_carte">${etudiant.ville} </a></td>

                <td><button class="details-btn">Détails</button></td>
    
    `
    tbody.appendChild(tr)

    //affichage modale
    tr.querySelector('.details-btn').addEventListener('click', () => {
        
        affichageModal(etudiant)
        

    })
});

divAffichage.appendChild(table)


}



// Fonction pour affichage en Cards
function affichageCards () {


etudiants.forEach(etudiant => {

    const cards = document.createElement('article')
    cards.innerHTML = `
            <div class="informationEtudiant" id="${etudiant.id}">
                <div class="header">
                    <div class="nom">
                        <h3>${etudiant.nom}</h3>
                        <h4>${etudiant.prenom}</h4>
                    </div>
                    <img id="avatar" src="/Projet-web-1step/front/assets/avatar.png" alt="">
                </div>

            <div class="content">
                <div>
                    <p>${etudiant.anecdotes}</p>
                </div>
                <div>
                    <a href="#" id = "btn_open">details</a>
                    <a href="carte.html" id="open_carte">Carte</a>
                </div>
            </div>
        </div>
    `


divAffichageCards.appendChild(cards)
//affichage de details
cards.querySelector('#btn_open').addEventListener('click', () => {
    affichageModal(etudiant)
})

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

    