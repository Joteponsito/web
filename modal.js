document.addEventListener("DOMContentLoaded", function () {
    const openTerms = document.getElementById('openTerms');
    const openPrivacy = document.getElementById('openPrivacy');
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');

    // Esperar a que el modal y el botón de cerrar estén cargados
    const closeButton = document.querySelector('.close-button');

    // Función para mostrar el modal con contenido
    function showModal(content) {
        modal.style.display = "block";
        modalContent.innerHTML = content;
    }

    // Mostrar Condiciones de Uso
    openTerms.addEventListener("click", (e) => {
        e.preventDefault();
        const termsContent = `
            <h2>Condiciones de Uso</h2>
            <ul>
                <li><strong>EMPRESA ORGANIZADORA DE LA PROMOCIÓN:</strong> La empresa La Cruz del Sur de Coto Brus S.A. con domicilio en Esterillos de Parrita, Provincia de Puntarenas y número identificativo 3-101-141840 organiza el sorteo de ámbito nacional, exclusivo para usuarios residentes en Costa Rica y mayores de edad.</li>
                <li><strong>FECHA DE INICIO Y FINALIZACIÓN:</strong> La Promoción se iniciará el día 02 de diciembre 2024 y finalizará el día 1 de enero 2025.</li>
                <li><strong>REQUISITOS DE PARTICIPACIÓN Y MECÁNICA DE LA PROMOCIÓN:</strong> Requisitos incluyen ser mayor de 18 años, realizar una compra de más de ¢5000, y completar el formulario con datos verídicos. El sorteo será aleatorio.</li>
                <li><strong>CONDICIONES DE LA PROMOCIÓN Y PREMIOS:</strong> El ganador recibirá una motocicleta para niños con motor de gasolina 49cc.</li>
                <li><strong>LIMITACIONES:</strong> El premio no será transferible, y los participantes deben cumplir los requisitos establecidos.</li>
                <li><strong>PUBLICACIÓN DE COMENTARIOS:</strong> No se permiten comentarios ofensivos ni que vulneren derechos de terceros.</li>
                <li><strong>EXONERACIÓN DE RESPONSABILIDAD:</strong> No nos responsabilizamos de pérdidas, robos, o daños derivados de la participación.</li>
                <li><strong>FACEBOOK/INSTAGRAM:</strong> La promoción no está patrocinada ni asociada a Facebook o Instagram.</li>
                <li><strong>PROTECCIÓN DE DATOS PERSONALES:</strong> Los datos serán tratados conforme a la normativa de protección de datos.</li>
                <li><strong>CAMBIOS:</strong> Nos reservamos el derecho de modificar estas bases.</li>
                <li><strong>LEGISLACIÓN APLICABLE:</strong> Se regirán conforme a la legislación aplicable en Costa Rica.</li>
            </ul>
        `;
        showModal(termsContent);
    });

    // Mostrar Política de Privacidad
    openPrivacy.addEventListener("click", (e) => {
        e.preventDefault();
        const privacyContent = `
            <h2>Política de Privacidad</h2>
            <ul>
                <li><strong>EMPRESA RESPONSABLE DEL TRATAMIENTO:</strong> La empresa La Cruz del Sur de Coto Brus S.A., con domicilio en Parrita Puntarenas.</li>
                <li><strong>FINALIDAD DEL TRATAMIENTO DE DATOS:</strong> Los datos serán tratados para la gestión de la promoción, contacto y gestión de premios.</li>
                <li><strong>CONSERVACIÓN DE LOS DATOS:</strong> Los datos se conservarán mientras dure la relación contractual, salvo que se solicite su supresión.</li>
                <li><strong>MEDIDAS DE SEGURIDAD:</strong> El organizador mantiene medidas de seguridad para proteger los datos personales.</li>
                <li><strong>PRÁCTICAS NO PERMITIDAS:</strong> Se prohiben prácticas ilegales o no permitidas con los datos personales.</li>
                <li><strong>RIGHTS:</strong> Los participantes pueden ejercer sus derechos de acceso, rectificación y supresión de sus datos.</li>
                <li><strong>CAMBIOS EN LA POLÍTICA DE PRIVACIDAD:</strong> Nos reservamos el derecho de modificar esta política en cualquier momento.</li>
            </ul>
        `;
        showModal(privacyContent);
    });

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    closeButton.addEventListener("click", function () {
        modal.style.display = "none"; // Ocultar el modal
    });

    // Cerrar el modal si se hace clic fuera del modal
    window.addEventListener("click", function (e) {
        if (e.target == modal) {
            modal.style.display = "none"; // Ocultar el modal si se hace clic fuera de él
        }
    });
});
