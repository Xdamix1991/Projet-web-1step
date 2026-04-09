document.addEventListener("DOMContentLoaded", () => {
    const themeCS = localStorage.getItem("theme")
    if (themeCS === "Sombre") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
})