const divAffichage = document.getElementById('listesApprenants')
const divAffichageCards = document.getElementById('cardsApprenants')

//REcuperation des etuadiants 
const res = await fetch('/Projet-web-1step/front/assets/promo.json')
// verification de la reponse  
if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
// traitement de la data
const data = await res.json()
const etudiants = data.apprenants




//fonction pour affichage en Liste (Tableau)
function affichageListe (){

const table = document.createElement('table')

table.innerHTML = `<table class="tableListe">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Ville</th>
                    <th>Détails</th>
                </tr>
            </thead>
            <tbody id="table-body"></tbody>
        </table>`

const tbody = table.querySelector('#table-body')
etudiants.forEach(etudiant => {
    const tr = document.createElement('tr')
    tr.innerHTML =`
                <td>${etudiant.nom}</td>
                <td>${etudiant.prenom}</td>
                <td>${etudiant.ville}</td>
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

affichageCards()

//verification de type d affichage souhaité
function typeAffichage () {

}

//gestion des types d'affichages sauvegardés
console.log(etudiants)