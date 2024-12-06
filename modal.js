// Obtener elementos del DOM
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");
const openTerms = document.getElementById("openTerms");
const openPrivacy = document.getElementById("openPrivacy");

// Mostrar modal con contenido dinámico
function showModal(content) {
    modalText.innerHTML = content;
    modal.style.display = "block";
}

// Cerrar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Abrir modal con "Condiciones de uso"
openTerms.addEventListener("click", (e) => {
    e.preventDefault();
    const termsContent = `
        <h2>Condiciones de uso</h2>
        <p>1.- EMPRESA ORGANIZADORA DE LA PROMOCIÓN
La empresa La Cruz del Sur de Coto Brus S.A. con domicilio en Esterillos de Parrita, Provincia de Puntarenas y número identificativo 3-101-141840 organiza con fines promocionales el sorteo (en adelante, “la Promoción”) de ámbito nacional, a desarrollar a través de Internet, exclusivo para usuarios residentes en Costa Rica y mayores de edad de acuerdo con lo dispuesto en el apartado de condiciones para participar.

2.-FECHA DE INICIO Y FECHA DE FINALIZACIÓN
La Promoción se iniciará el día 02 de diciembre 2024, y finalizará el día 1 de enero 2025.

3.- REQUISITOS DE PARTICIPACIÓN Y MECÁNICA DE LA PROMOCIÓN
Los requisitos de participación serán los siguientes:
Podrán participar aquellas personas que residan en Costa Rica y sean mayores de 18 años.
Sólo podrán participar aquellos participantes que hayan realizado una compra de combustible por más de ¢5000 (cinco mil colones) y hayan llenado el formulario indicando el número de factura con nombre respectivo.
Los datos personales con los que los participantes rellenen el formulario de inscripción deberán ser datos veraces.
Los Participantes sólo podrán inscribirse una vez en la presente promoción.
La mecánica de la Promoción consiste en un sorteo aleatorio para determinar el ganador.
El ganador será acreditado como tal una vez que se verifique que los datos de nombre del formulario coinciden con los de la factura electrónica.

4.- CONDICIONES DE LA PROMOCIÓN Y PREMIOS
Se elegirá 1 ganador por medio de sorteo aleatorio el día 1 de enero 2025.
La selección de los ganadores realizará de forma aleatoria a través de la plataforma automatizada y operada por una compañía independiente. Dicha plataforma garantiza la transparencia del resultado del sorteo y como prueba de ello emite un certificado de validez para cada uno de sus sorteos, cuyo resultado es inalterable por el organizador del sorteo, y que cualquier usuario participante puede solicitar al organizador.
El ganador obtendrá como premio: una motocicleta para niños con motor de gasolina 49cc. tipo todo terreno, motocross.

5.- LIMITACIONES
Si se evidenciase que cualquiera de los participantes no cumple con los requisitos exigidos en las Bases, o los datos proporcionados para participar no fueran válidos, su participación se considerará nula y quedarán automáticamente excluidos de la Promoción, perdiendo todo derecho sobre los premios otorgados en virtud de esta Promoción.
No podrán participar en la Promoción las siguientes personas: (i) Los trabajadores por cuenta ajena empleados en cualquiera de las sociedades y otras entidades con personalidad jurídica vinculadas a La Cruz del Sur de Coto Brus S.A. (ii) Cualquier otra persona física que haya participado directa o indirectamente en la organización de esta Promoción o haya estado involucrado directa o indirectamente en su preparación o desarrollo.
El premio entregado no será transferible ni susceptible de cambios, alteraciones o compensaciones a petición de los Participantes, no pudiendo ser canjeado por cualquier otro producto ni por dinero.
La Cruz del Sur de Coto Brus S.A. se reserva el derecho, si concurre justa causa y previa comunicación en legal forma, de efectuar cualquier cambio, suspender o ampliar esta Promoción.
Correrán a cuenta y cargo del ganador cualquier carga fiscal o tributaria que la aceptación del premio pudiera suponerle, así como cualquier otro gasto derivado de la promoción que no esté expresamente asumido por La Cruz del Sur de Coto Brus en las presentes Bases Legales.
Se establece un plazo de QUINCE (15) días naturales desde la fecha de la concesión del premio, para efectuar cualquier reclamación motivada. La Cruz del Sur de Coto Brus S.A. se reserva, en caso de obligada necesidad, el derecho de sustituir el premio por otro de similares características.

6.- PUBLICACIÓN DE COMENTARIOS U OPINIONES
No se permitirán comentarios u opiniones cuyo contenido se considere inadecuado, que sean ofensivos, injuriosos o discriminatorios o que pudieran vulnerar derechos de terceros. Tampoco se permitirán comentarios contra un particular que vulneren los principios de derecho al honor, a la intimidad personal y familiar y a la propia imagen. No nos responsabilizaremos de los daños ocasionados por los comentarios que hagan los participantes en la Promoción, y que en cualquier momento pudieran herir la sensibilidad de otros participantes.

7.- EXONERACIÓN DE RESPONSABILIDAD
A título enunciativo, pero no limitativo, no nos responsabilizamos de las posibles pérdidas, robos, retrasos o cualquiera otra circunstancia imputable a terceros que puedan afectar al desarrollo de la presente Promoción, así como tampoco nos responsabilizamos del uso que haga el participante respecto del premio que obtenga de esta Promoción, y no asumimos responsabilidad alguna por ningún daño o perjuicio de cualquier tipo que pudieran sufrir los Participantes, ganador o terceros.
No asumimos la responsabilidad en casos de fuerza mayor o caso fortuito que pudieran impedir la realización de la Promoción o el disfrute total o parcial del premio. En caso de que esta Promoción no pudiera realizarse, bien por fraudes detectados en la misma, errores técnicos, o cualquier otro motivo que no esté bajo el control de La Cruz del Sur de Coto Brus S.A. y que afecte al normal desarrollo del Concurso, nos reservamos el derecho a cancelar, modificar, o suspender la misma, incluyendo la página web de participación.

8.- FACEBOOK/INSTAGRAM
La promoción no está patrocinada, avalada, administrada ni asociada en modo alguno a Facebook o Instagram por lo que los Participantes liberan a Facebook de toda responsabilidad por los eventuales daños que se deriven de la misma.

9.- PROTECCIÓN DE DATOS PERSONALES
La empresa responsable del tratamiento de sus datos es La Cruz del Sur de Coto Brus S.A., con domicilio en Parrita Puntarenas y número identificativo 3-101-141840.
La Cruz del Sur de Coto Brus S.A. se toma muy en serio la protección de la privacidad y de tus datos personales. Por lo tanto, tu información personal se conserva de forma segura y se trata con el máximo cuidado.
De conformidad con lo establecido en la normativa aplicable en materia de protección de datos, y concretamente en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, cada Participante, con la aceptación de estas Bases Legales consiente que los datos personales facilitados para la participación en este concurso sean incorporados a un fichero titularidad de La Cruz del Sur de Coto Brus S.A. para tramitar la participación en el concurso y para comunicarle el premio en caso de que resultase Ganador.
Le informamos de que sus datos personales de contacto serán utilizados para las siguientes finalidades:
Los Participantes garantizan que los datos personales facilitados son veraces y se hacen responsables de comunicar a La Cruz del Sur de Coto Brus S.A., cualquier modificación de los mismos. La Cruz del Sur de Coto Brus S.A. se reserva el derecho a excluir de la presente promoción a todo Participante que haya facilitado datos falsos. Se recomienda tener la máxima diligencia en materia de Protección de Datos mediante la utilización de herramientas de seguridad, no pudiéndose responsabilizar a [____________] de sustracciones, modificaciones o pérdidas de datos ilícitas.
Los Participantes tienen derecho a (i) acceder a sus datos personales, así como a (ii) solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión, (iii) solicitar la limitación del tratamiento de sus datos, (iv) oponerse al tratamiento de sus datos y (v) solicitar su portabilidad. Los Participantes pueden ejercer todos estos derechos en la siguiente dirección de email [____________], indicando el motivo de su petición.
Los Participantes pueden también, enviar su petición por correo ordinario a la siguiente dirección: [____________].
Sin perjuicio de cualquier otro recurso administrativo o acción judicial, el Participante tendrá derecho a presentar una reclamación ante una Autoridad de Control, en particular en el Estado miembro en el que tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción, en caso de que considere que el tratamiento de sus datos personales no es adecuado a la normativa, así como en el caso de no ver satisfecho el ejercicio de sus derechos.
La Autoridad de Control ante la que se haya presentado la reclamación informará al reclamante sobre el curso y el resultado de la reclamación.
Para más información, puedes consultar la política de privacidad de [____________]a través del siguiente enlace: [____________].

10.- CAMBIOS
Nos reservamos el derecho de modificar o ampliar estas bases promocionales, en la medida que no perjudique o menoscabe los derechos de los participantes en la Promoción.

11.- LEGISLACIÓN APLICABLE Y JURISDICCIÓN
Estas bases legales se regirán de conformidad con la ley [____________]. Serán competentes para resolver cualquier reclamación o controversia que pudiera plantearse en relación con la validez, interpretación o cumplimiento de estas bases los Juzgados y Tribunales de la ciudad de [____________].
</p>
    `;
    showModal(termsContent);
});

// Abrir modal con "Política de privacidad"
openPrivacy.addEventListener("click", (e) => {
    e.preventDefault();
    const privacyContent = `
        <h2>Política de privacidad</h2>
        <p>
        1.- ¿Cuál es la empresa responsable del tratamiento de sus datos?  
La empresa responsable del tratamiento de sus datos es [indique aquí su nombre de empresa], con domicilio en [indique aquí su dirección de empresa] e identificada con el número de registro [indique aquí el número identificativo de su empresa] (en adelante, ORGANIZADOR).
El Usuario podrá contactar con el ORGANIZADOR mediante correo electrónico: [____________].

2.- ¿Por qué el ORGANIZADOR está legitimada para llevar a cabo el tratamiento de sus datos?
El ORGANIZADOR tiene legitimación para el tratamiento de sus datos para poder llevar a cabo la prestación de los servicios que haya solicitado a través de la promoción.

3.- ¿Cuáles son las finalidades del tratamiento de sus datos de carácter personal?
De conformidad con lo establecido el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, le informamos que sus datos personales serán tratados con las finalidades que se relacionan a continuación:
[Incluir finalidades del tratamiento de los datos personales del Usuario]
La empresa [_________] informa que en la página web de la promoción pueden existir módulos sociales (botones de “me gusta” de los perfiles sociales de la marca), y que por lo tanto existe la transmisión de datos personales de los participantes (como la IP) hacia las redes sociales.
No obstante, el Usuario podrá revocar el consentimiento, en cada comunicado comercial o publicitario que se le haga llegar, y en cualquier momento, mediante notificación en la siguiente dirección de correo electrónico baja@[____________].com.

4.- Conservación de los datos
Los datos recabados por el ORGANIZADOR se conservarán mientras se mantenga la relación contractual entre las partes, siempre y cuando no se solicite la supresión de dichos datos por el Usuario.

5.- Medidas de Seguridad
El ORGANIZADOR mantiene los niveles de seguridad de protección de datos personales, conforme a la normativa en materia de protección de datos.

6.- Prácticas no permitidas
[Incluir prácticas no permitidas por los Usuarios]

7.- ¿Qué derechos tiene el usuario en relación con sus datos?
Ponemos en conocimiento del Usuario que podrá ejercer, en cualquier momento, sus derechos de acceso, rectificación, supresión, oposición, limitación, portabilidad u olvido al tratamiento de sus datos mediante la remisión de una comunicación escrita, incluyendo copia de su Documento Identificativo, a la siguiente dirección: [indique aquí su dirección postal completa], o bien enviando un correo electrónico a la siguiente dirección: info@[____________] .com

8.- Preguntas
Si tiene alguna pregunta sobre la presente Política de Privacidad, le rogamos que se ponga en contacto con nosotros enviando un correo electrónico a la dirección info@[____________].com

9.- Cambios
El ORGANIZADOR se reserva el derecho de revisar esta Política de Privacidad en el momento que lo considere oportuno.</p>
    `;
    showModal(privacyContent);
});
