// Hacer que las funciones sean accesibles globalmente
window.toggleShareMenu = function () {
    var menu = document.getElementById("shareMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
};

window.openShareModal = function () {
    document.getElementById("shareModal").style.display = "flex";
};

window.closeShareModal = function () {
    document.getElementById("shareModal").style.display = "none";
};

window.copyLink = function () {
    const link = document.getElementById("pageLink");
    link.select();
    link.setSelectionRange(0, 99999); // Para dispositivos móviles
    navigator.clipboard.writeText(link.value).then(() => {
        alert("¡Enlace copiado al portapapeles!");
    }).catch(err => {
        alert("Hubo un error al copiar el enlace: " + err);
    });
};

// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA70hWjOOJMmgPtXDycYYcPy12bgVoErfo",
    authDomain: "base-rifas.firebaseapp.com",
    projectId: "base-rifas",
    storageBucket: "base-rifas.firebasestorage.app",
    messagingSenderId: "1027791391189",
    appId: "1:1027791391189:web:a55e410d627f8f7466555c",
    measurementId: "G-PRF27WGTYD"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    const participantCountElement = document.getElementById("participantCount");

    if (!participantCountElement) {
        console.error("❌ No se encontró el elemento #participantCount en el DOM.");
        return;
    }

    console.log("✅ Contador encontrado, inicializando escucha de Firestore...");

    // Escuchar cambios en Firestore en tiempo real
    onSnapshot(collection(db, "participants"), (snapshot) => {
        const totalParticipants = snapshot.size;
        participantCountElement.textContent = totalParticipants;
        console.log("📊 Contador actualizado:", totalParticipants);
    });
});
