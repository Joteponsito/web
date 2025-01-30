// Esperar a que el DOM esté completamente cargado antes de ejecutar cualquier código
document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ DOM completamente cargado.");

    // Obtener referencia al formulario
    const form = document.getElementById("registrationForm");
    if (!form) {
        console.error("❌ No se encontró el formulario #registrationForm en el DOM.");
        return;
    }

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

    console.log("✅ Firebase inicializado.");

    // Contador de participantes
    const participantCountElement = document.getElementById("participantCount");

    // Función para obtener el conteo de participantes
    async function updateParticipantCount() {
        try {
            const participantsSnapshot = await getDocs(collection(db, "participants"));
            const count = participantsSnapshot.size;
            if (participantCountElement) {
                participantCountElement.textContent = count;
            }
            console.log("📊 Contador actualizado:", count);
        } catch (error) {
            console.error("Error al obtener el conteo de participantes:", error);
        }
    }

    // Escuchar el envío del formulario
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const email = document.getElementById("email").value.trim();
        const verifyEmail = document.getElementById("verifyEmail").value.trim();
        const factura = document.getElementById("factura").value.trim();

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
            form.reset();

            // Actualizar el contador tras un nuevo registro
            updateParticipantCount();

            // Redireccionar después del registro
            window.location.href = "Form copy.html";

        } catch (error) {
            console.error("Error al guardar los datos:", error);
            alert("Hubo un error al enviar tus datos. Inténtalo nuevamente.");
        }
    });

    // Actualizar el contador al cargar la página
    updateParticipantCount();
});

