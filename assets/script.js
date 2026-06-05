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

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// carica tema salvato
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
}

// aggiorna icona
function updateIcon() {
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
}

updateIcon();

// click toggle
toggleBtn.addEventListener("click", (e) => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateIcon();
});

const btn = document.getElementById("project-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-modal");

// apri modale
btn.addEventListener("click", (e) => {
  modal.classList.add("show");
});

// chiudi con X
closeBtn.addEventListener("click", (e) => {
  modal.classList.remove("show");
});

// chiudi cliccando fuori
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

// compilazione form
const form = document.querySelector(".modal-content form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = form.querySelector("input[type='text']");
  const emailInput = form.querySelector("input[type='email']");
  const messageInput = form.querySelector("textarea");
  const submitBtn = form.querySelector("button");

  const isValid =
    nameInput.value.trim() !== "" &&
    emailInput.value.includes("@") &&
    messageInput.value.trim().length > 0; // per non averlo vuoto

  if (!isValid) {
    alert("Compila correttamente tutti i campi");
    return;
  }

  const originalText = submitBtn.textContent;

  // disabilita il pulsante submit
  submitBtn.disabled = true;

  // svuota bottone
  submitBtn.textContent = "";

  // wrapper
  const wrapper = document.createElement("span");
  wrapper.style.display = "flex";
  wrapper.style.alignItems = "center";
  wrapper.style.gap = "8px";

  // spinner
  const spinner = document.createElement("span");
  spinner.classList.add("spinner");

  // testo loading
  const text = document.createElement("span");
  text.textContent = "Invio...";

  wrapper.appendChild(spinner);
  wrapper.appendChild(text);

  submitBtn.appendChild(wrapper);

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;

    alert("Richiesta inviata con successo!");

    form.reset();
    document.getElementById("modal").classList.remove("show");
  }, 1500);
});
