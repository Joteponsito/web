// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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

// Referencia al formulario
const form = document.getElementById("registrationForm");

// Escuchar el envío del formulario
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const email = document.getElementById("email").value.trim();
    const verifyEmail = document.getElementById("verifyEmail").value.trim();
    const factura = document.getElementById("factura").value.trim();

    // Validación de email
    if (email !== verifyEmail) {
        alert("Los correos electrónicos no coinciden.");
        return;
    }

    try {
        // Comprobar si la factura ya está registrada
        const facturaQuery = query(collection(db, "participants"), where("factura", "==", factura));
        const facturaSnapshot = await getDocs(facturaQuery);

        if (!facturaSnapshot.empty) {
            alert("El número de factura ya está registrado. Por favor, verifica tus datos.");
            return;
        }

        // Guardar datos en Firestore
        await addDoc(collection(db, "participants"), {
            nombre,
            apellidos,
            email,
            factura,
            fechaRegistro: new Date().toISOString()
        });

        alert("¡Registro exitoso! Estás participando en el sorteo.");
        window.location.href = "Form copy.html";
        form.reset();

    } catch (error) {
        console.error("Error al guardar los datos:", error);
        alert("Hubo un error al enviar tus datos. Inténtalo nuevamente.");
    }
});

