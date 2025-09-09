function toggleShareMenu() {
    var menu = document.getElementById("shareMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function openShareModal() {
    document.getElementById("shareModal").style.display = "flex";
}

function closeShareModal() {
    document.getElementById("shareModal").style.display = "none";
}

function copyLink() {
    const link = document.getElementById("pageLink");
    link.select();
    link.setSelectionRange(0, 99999); // Para dispositivos móviles
    navigator.clipboard.writeText(link.value).then(() => {
        alert("¡Enlace copiado al portapapeles!");
    }).catch(err => {
        alert("Hubo un error al copiar el enlace: " + err);
    });
}