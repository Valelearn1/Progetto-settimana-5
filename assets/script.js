// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.

const logo = document.getElementById("logo");
const heroContent = document.getElementById("heroContent");

logo.addEventListener("click", (e) => {
  heroContent.classList.remove("animate");

  void heroContent.offsetWidth; // forziamo il browser a registrare la rimozione per poterla aggiungere ogni volta che si clicca il logo

  heroContent.classList.add("animate");
});
