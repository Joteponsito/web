const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "jotepon21@gmail.com", // Reemplázalo con tu correo
        pass: "josesito55"        // Reemplázalo con tu contraseña o clave de aplicación
    }
});

const mailOptions = {
    from: "jotepon21@gmail.com",
    to: "mamc2345@gmail.com",
    subject: "Correo de prueba",
    text: "¡Hola! Este es un correo de prueba enviado desde Node.js."
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log("Error al enviar el correo:", error);
    }
    console.log("Correo enviado:", info.response);
});