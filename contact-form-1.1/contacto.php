<?php
/**
 * @version 1.0
 */

require("class.phpmailer.php");
require("class.smtp.php");

// Valores enviados desde el formulario
if ( !isset($_POST["nombre"]) || !isset($_POST["mail"]) || !isset($_POST["asunto"]) ) {
    die ("Es necesario completar todos los datos del formulario");
}
$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$mail = $_POST["mail"];
$asunto = $_POST["asunto"];
$mensaje = "Solicito mas informacion";

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "c1320310.ferozo.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "no-reply@logisticahermes.com.ar";  // Mi cuenta de correo
$smtpClave = "gx*@O1/8hL";  // Mi contraseña

// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "info@logisticahermes.com.ar";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 587; 
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";

$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $smtpUsuario; // Email desde donde envío el correo.
$mail->FromName = $nombre;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario
$mail->AddReplyTo($email); // Esto es para que al recibir el correo y poner Responder, lo haga a la cuenta del visitante. 
$mail->Subject = $asunto; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje) . "<br><br>" . "Nombre: " .$nombre."<br><br>"."Telefono: " . $telefono;
$mail->Body = "{$mensajeHtml} <br /><br />Powered by Main Group<br />" ; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n Main Group"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$estadoEnvio = $mail->Send(); 

if ($estadoEnvio) {
	header("Location: http://logisticahermes.com.ar/exito");
}else{
	header("Location: http://logisticahermes.com.ar/fallo");
}

die();
