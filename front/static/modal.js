export function affichageModal (etudiant) {

    const divModal = document.getElementById('modal')
    let btnOpen = document.getElementById('btn_open')
    const container = document.createElement('div')
    container.className = "modal-content"

    container.innerHTML = `
        

                <header>
                        
                        <img id="avatar" src="/Projet-web-1step/front/assets/avatar.png" alt="">
                        <div id ="nom">
                        <h2>${etudiant.nom}</h2>
                        <h3>${etudiant.prenom}</h3>
                        </div>

                </header>

            <div class="modalBody">
                <p>Anecdotes sur l'apprenant :</p>
                <p>${etudiant.anecdotes}</p>                
            </div>

            <div class="modalLocation">
                <p>${etudiant.ville}</p>
                <a href="#" id = "btn_open">details</a>
            </div>

    
    `
divModal.innerHTML = ''; // netoyage de l'ancienne modale
divModal.appendChild(container)
divModal.showModal();

divModal.addEventListener('click', (e) => {
    if (e.target === divModal) {
        divModal.close();
    }
});
}