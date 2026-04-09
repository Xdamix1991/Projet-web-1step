export function affichageModal (etudiant) {

    const divModal = document.getElementById('modal')
    let btnOpen = document.getElementById('btn_open')
    const container = document.createElement('div')
    container.className = "modal-content"

    container.innerHTML = `
        

                <header>
                        
                        <img id="avatar" src="/Projet-web-1step/front/assets/avatar.png" alt="">
                        <div id ="nom">
                        <h2 class="ligne"><span>Nom :</span> <span>${etudiant.nom}</span></h2>
                        <h3 class="ligne"><span>Prénom :</span> <span>${etudiant.prenom}</span></h3>
                        <h3 class="ligne"><span>Ville :</span> <span>${etudiant.ville}</span></h3>
                        </div>

                </header>
            <p>Anecdotes sur l'apprenant :</p>
            <div class="modalBody">
                
                <p>${etudiant.anecdotes}</p>                
            </div>
    
`

divModal.innerHTML = '';
divModal.appendChild(container)
divModal.showModal();

divModal.addEventListener('click', (e) => {
    if (e.target === divModal) {
        divModal.close();
    }
});
}