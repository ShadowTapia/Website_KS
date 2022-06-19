<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>The Kingstown School</title>
<script type="text/javascript">
function cerrarse(){
	window.close()
	}
</script>
</head>
<body>
<?php
if(isset($_POST["email"]) && isset($_POST["nombre"]) && isset($_POST["asunto"]) && isset($_POST["correod"]) && isset($_POST["mensaje"]) ){
	$fecha = date("D-M-y H:i");
	$correo = $_POST["correod"];
	$mensaje	  = "Sr(a): ". $_POST["nombre"]."\r\n";
	$mensaje	  .= "Domiciliado: ". $_POST["direccion"]."\r\n";
	$mensaje	  .= "Telefono: ". $_POST["phono"]."\r\n";
	$mensaje	  .= "Mail de respuesta: ". $_POST["mail"]."\r\n Escribio : \r\n";	
	$mensaje	  .= $_POST["mensaje"]."\r\n";
	$mensaje	  .="El mensaje se escribio el " .$fecha;
		
	$cabeceras = "From: ". $_POST["mail"]. "\r\n";
	$cabeceras .= "Reply-To: ". $_POST["mail"];
    		

	$asunto = $_POST["asunto"];
	//se obtienen las variables desde el formulario
	//$correo la dirección donde se dirige el mail
	//$Asunto, asunto del mensaje
	//$message, mensaje propiamente tal
	//$_POST["mail"] dirección electronica que puso el cliente 
	mail($correo, $asunto, $mensaje ,$cabeceras);
	echo "&estatus=ok&";
}   
?> 
</body>
</html>
