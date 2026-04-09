//preference html
const btnPreferences = document.getElementById('enregisterTheme')




//Enregistrement des choix d'affichage de l'User dans le local storage 
btnPreferences.addEventListener('click', () => {
    const theme = document.getElementById('themeSite').value
    const listeOrCardes = document.getElementById('listeCard')
    const listCards = listeOrCardes.choixAffiches.value
    console.log(listCards, theme)


        localStorage.setItem("theme", theme);
        localStorage.setItem("affichage", listCards);
        
    if (theme === "Sombre") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

        }

    )

document.addEventListener("DOMContentLoaded", () => {
    const themeCS = localStorage.getItem("theme")
    if (themeCS === "Sombre") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
})


//page d'accaeuil Préference Theme


//index html acceuil

//const affichageAcceuil = document.getElementById('affichageAcc').TypeAffichage.value




