// Obtener elementos del DOM
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");
const openTerms = document.getElementById("openTerms");
const openPrivacy = document.getElementById("openPrivacy");

// Abrir el modal para "Condiciones de uso"
openTerms.addEventListener("click", (e) => {
    e.preventDefault();
    modalText.innerHTML = "<h2>Condiciones de uso</h2><p>Aquí van las condiciones de uso...</p>";
    modal.style.display = "block";
});

// Abrir el modal para "Política de privacidad"
openPrivacy.addEventListener("click", (e) => {
    e.preventDefault();
    modalText.innerHTML = "<h2>Política de privacidad</h2><p>Aquí va la política de privacidad...</p>";
    modal.style.display = "block";
});

// Cerrar el modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
