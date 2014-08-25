/**
* Esta librería JavaScript contiene las funciones y procedimientos básicos que se utilizan en
* todas las páginas html. Son elementos básicos como el posicionamiento del foco en un control
* de la página, control de campos numéricos...
*/
var strServletInicio = "http://127.0.0.1:8080/certificados/servlet/es/unav/ga/comun/inicio/Inicio_FS.html";

var gBotonPorDefecto;
var gEnviado=false;
var arrTeclas=null;
var gAUXILIAR=0;


/**
* @name aplicarCSS1
* @format function aplicarCSS1(css)
* @comment Aplica formato CSS para contrarrestar la ausencia de estilos CSS en los navegadores de NS4 e
* inferiores, donde se aplica el CSS1. La utilización inicial es la de sobreescribir el estilo del
* <em>BODY</em> aplicado en la hoja de estilos externa, con el fin de eliminar los márgenes que no
* funcionan correctamente en el CSS1
*
* @param     <b>css</b> - El estilo CSS que queremos que se aplique.
* @example aplicarCSS1("BODY {margin: 0pt;}");
*/
function aplicarCSS1 (css)
{
	if (navigator.appName == "Netscape" && parseInt(navigator.appVersion) < 5)
	{
		document.writeln("<style type=text\/css>");
		document.write(css);
		document.writeln("<\/style>");
	}
}

/** 
* @name focoPrimerControl
* @format function focoPrimerControl(Formulario, Campo)
* @comment Posiciona el cursor en el primer campo visible de un formulario
*
* @param <b>Formulario</b> - Es un parámetro que puede no existir, pero que indica cúal es el formulario
*           donde se encuentra el campo sobre el que queremos posicionar el cursor. En
*           caso de no existir este parámetro, se toma el primer formulario de la página. <BR>
*        <b>Campo</b> - Nombre del control en el que se quiere posicionar el foco
* @example focoPrimerControl();
*/
function focoPrimerControl(Formulario, Campo)
{
  var encontrado = false;
	if (Formulario==null)
		Formulario=document.forms[0];

	for(var i=0;i<Formulario.length; i++)
	{
		if ((Formulario.elements[i].type != "hidden") && (Formulario.elements[i].type != "button") && (Formulario.elements[i].type != "submit") && (Formulario.elements[i].type != "image") && (Formulario.elements[i].type != "reset")) 
		{	
			if(Campo!=null)
			{
				if (Campo == Formulario.elements[i].name)
				{
					Formulario.elements[i].focus();
          encontrado=true;
					break;
				}
			}
			else
			{
				Formulario.elements[i].focus();
        encontrado=true;
				break;
			}
		}
	}
	if (encontrado && Formulario.elements[i].type && Formulario.elements[i].type.indexOf("select")==-1)
		Formulario.elements[i].select();
}

/** 
* @name limpiar
* @format function limpiar(Formulario)
* @comment Borra el contenido de los campos de texto de un formulario
*
* @param <b>Formulario</b> - Toma el valor del formulario donde están los campos que queremos limpiar
*             y si no existe, toma el primer formulario de la página
* @example limpiar();
*/
function limpiar(Formulario)
{
	if (Formulario == null)
		Formulario = document.forms[0];

	for (var i=0;i<Formulario.length;i++)
	{
		if (Formulario.elements[i].type == "text" || Formulario.elements[i].type == "password")
			Formulario.elements[i].value = "";
    if ((Formulario.elements[i].type == "select-one" || Formulario.elements[i].type == "select-multiple") && Formulario.elements[i].size>1)
      for(var count = Formulario.elements[i].options.length - 1; count >= 0; count--)
        Formulario.elements[i].options[count] = null;
    if (Formulario.elements[i].type == "select-one"&& Formulario.elements[i].size==1)
			Formulario.elements[i].selectedIndex=0;
  }
}

/**
* @name confirmar
* @format function confirmar(Accion)
* @comment Es la encargada de presentar un mensaje o no, dependiendo de la <b>Accion<b> que se le
*          pase. Esta función es utilizada por las funciones que realizan envíos de formularios.
* @param <b>Accion</b> - es un texto que indentifica el <b>Command</b> que se ejecuta.
* @return <b>true</b> - en caso de no tener mensaje asociado a dicho <b>Command</b>, o si el usuario
*          ha confirmado el mensaje presentado.<BR>
*         <b>false</b> - si el usuario no confirma el mensaje presentado.
*/
function confirmar(accion)
{
	switch (accion)
	{
	case 'BORRAR': return mensaje(2);
	case 'GUARDAR': return mensaje(3);
	case 'DELETE': return mensaje(2);
	case 'SAVE': return mensaje(3);
	/*case 'SAVE_EDIT': return mensaje(3);
	case 'SAVE_NEW': return mensaje(3);*/
	default: return confirmOther(accion);
	}
}

function confirmOther(action) {
	if(action.substr(0,4) == "SAVE")
		return mensaje(3);
	return true;
}


/**
* @name submitForm
* @format function submitForm(Campo, Valor, Formulario, Comprobar)
* @comment Esta función envía un formulario poniendo un valor que se le pasa en un campo que se 
*          le indica antes de enviarlo y pudiendo comprobar si ya se había llamado a esta función
*          sin haber podido obtener un resultado todavía, es decir, comprobando que si se está 
*          enviando todavía no permita volver a enviar hasta que no se realice el primer envío.
*
* @param <b>Campo</b> - Un objeto que referencia al campo en el que queremos depositar un valor que
*         le pasamos a continuación. <BR>
*        <b>Valor</b> - Un string que indica el valor que queremos dejar en el campo que le hemos
*         indicado antes. <BR>
*        <b>Formulario</b> - Un objeto que referencia al formulario que queremos enviar. Si este
*         parámetro se deja a null se entiende que es el formulario primero de la página. <BR>
*        <b>Comprobar</b> - Booleano que indica si queremos que controle si ya se está enviando 
*         este formulario, no realizando varios envíos a la vez. El valor de este parámetro, 
*         por defecto, es false
*
* @return <b>true</b> - si todo va bien y los datos son enviados correctamente.<BR>
*         <b>false</b> - si hay algún problema y los datos no se pueden enviar.
* @example submitForm(document.forms[0].inpCampo, "FIND", null, true);
*/
function submitForm(campo, valor, Formulario, bolComprobar)
{
	if (Formulario == null)
		Formulario = document.forms[0];

  if (bolComprobar!=null && bolComprobar)
  {
    if (gEnviado==1)
    {
      mensaje(16);
      return false;
    }
    else
    {
      gEnviado=1;
      campo.value = valor;
      Formulario.submit();
    }
  }
  else
  {
    campo.value = valor;
    Formulario.submit();
  }
  return true;
}

/**
* @name submitCommandForm
* @format function submitCommandForm(Command, Depurar, Formulario, newAction, newTarget, Comprobar)
* @comment Esta es la función que principalmente se utilizará para implementar las operaciones 
*          a realizar por los botones que pongamos en la página. Su misión es la de enviar un 
*          formulario poniendo el Command (se trata de un texto que utilizamos para indicar al 
*          servlet el tipo de operación que queremos que realice o el botón que le ha llamado) 
*          que indiquemos. Permite hacer una depuración previa, pudiendo cancelar el envío si la
*          depuración no es satisfactoria.<BR><BR>
*
*          La ejecución de esta función requiere que en el formulario a enviar exista un campo 
*          oculto que se llame <b>Command</b>, el cual lo utilizará esta función para enviar el 
*          Command que le indiquemos.
*
* @param <b>Command</b> - Texto que permite al servlet identificar que tipo de operación debe 
*          realizar o qué botón le ha llamado. <BR>
*        <b>Depurar</b> - Booleano que indica si se quiere realizar una depuración antes de enviar
*          el formulario. El valor de este campo, por defecto, es false. Si esta opción se pone a 
*          true, se deberá implementar una función en la propia página que se llame <b>depurar</b> 
*          y en la que realizaremos las depuraciones pertinentes, devolviendo true o false 
*          obligatoriamente. Si devolvemos false no se enviará el formulario. Esta función recibe 
*          como parámetro el <b>Command</b>. <BR>
*        <b>Formulario</b> - Un objeto que referencia al formulario que queremos enviar. Si este 
*          dato se pone null, se entiende que se trata del primer formulario de la página. <BR>
*        <b>newAction</b> - Un string que indica la URL de la página a la que queremos enviar el
*          formulario. Si se deja a null no se cambia la URL que tenga establecido el formulario 
*          en su propiedad <b>action</b> <BR>
*        <b>newTarget</b> - Un string que indica un nombre de una ventana o frame al que queremos 
*          enviar el formulario. Se refiere a la propiedad <b>target</b> del formulario. Si esta 
*          opción no se indica o se deja a null, se mantiene la que ponga en el formulario. <BR>
*        <b>Comprobar</b> - Booleano que indica si queremos que controle si ya se ha pulsado este 
*          botón anteriormente y todavía no ha podido contestar el servidor, evitando que un usuario
*          pueda dar varias veces al mismo botón, creyendo que no le ha dado, porque tarda en responder.
*          El valor por defecto de este parámetro es false.
*
* @return <b>true</b> - si todo va correctamente y se envían los datos.<BR>
*         <b>false</b> - si hay algún problema y los datos no se pueden enviar.
* @example submitCommandForm("FIND", false, null, null, null, true);
*/
function submitCommandForm(accion, bolDepurar, Formulario, newAction, newTarget, bolComprobar)
{
	
	if (bolDepurar!=null && bolDepurar==true)
		if (!depurar(accion)) return false;
	if (Formulario == null)
		Formulario = document.forms[0];
	
	if (confirmar(accion))
	{
		if (newAction != null)
			Formulario.action = newAction;
		if (newTarget != null)
			Formulario.target = newTarget;
		submitForm(Formulario.Command, accion, Formulario, bolComprobar);
	}
	return true;
}


/**
* @name submitCommandFormParameter
* @format function submitCommandFormParameter(Command, Campo, Valor, Depurar, Formulario, 
*         newAction, newTarget, Comprobar)
* @comment Esta es la función que principalmente se utilizará para implementar las operaciones 
*          a realizar por los botones que pongamos en la página, en los casos en los que queramos 
*          que, además, envíe un parámetro adicional en función del Link que pinche, de forma que 
*          su aplicación práctica sería para ir al detalle de una línea concreta que de una relación, 
*          de forma que deberemos indicar la clave de la línea de la que queremos ver su detalle, 
*          valor que será diferente dependiendo de la línea que elijamos. Su misión es la de enviar
*          un formulario poniendo el Command (se trata de un texto que utilizamos para indicar al
*          servlet el tipo de operación que queremos que realice o el botón que le ha llamado) que 
*          indiquemos y el valor del que antes hablábamos en un campo del formulario, campo que debe 
*          existir y que, por lo general será un campo oculto. Permite hacer una depuración previa, 
*          pudiendo cancelar el envío si la depuración no es satisfactoria.<BR><BR>
*
*          La ejecución de esta función requiere que en el formulario a enviar exista un campo oculto
*          que se llame <b>Command</b>, el cual lo utilizará esta función para enviar el Command que
*          le indiquemos. También deberá existir el campo en el que queremos guardar el valor clave 
*          que identifica la línea.
*
* @param <b>Command</b> - Texto que permite al servlet identificar que tipo de operación debe realizar
*         o qué botón le ha llamado. <BR>
*        <b>Campo</b> - Un objeto que referencia a un campo del formulario en el que queremos que se
*         deposite el valor clave que identifica a la línea. <BR>
*        <b>Valor</b> - El valor de tipo string que es el valor clave que queremos depositar en el 
*         campo anterior. <BR>
*        <b>Depurar</b> - Booleano que indica si se quiere realizar una depuración antes de enviar 
*         el formulario. El valor de este campo, por defecto, es false. Si esta opción se pone a true, 
*         se deberá implementar una función en la propia página que se llame <b>depurar</b> y en la 
*         que realizaremos las depuraciones pertinentes, devolviendo true o false obligatoriamente. 
*         Si devolvemos false no se enviará el formulario. Esta función recibe como parámetro el
*         <b>Command</b>. <BR>
*        <b>Formulario</b> - Un objeto que referencia al formulario que queremos enviar. Si este dato
*         se pone null, se entiende que se trata del primer formulario de la página. <BR>
*        <b>newAction</b> - Un string que indica la URL de la página a la que queremos enviar el 
*         formulario. Si se deja a null no se cambia la URL que tenga establecido el formulario en 
*         su propiedad <b>action</b>. <BR>
*        <b>newTarget</b> - Un string que indica un nombre de una ventana o frame al que queremos 
*         enviar el formulario. Se refiere a la propiedad <b>target</b> del formulario. Si esta opción
*         no se indica o se deja a null, se mantiene la que ponga en el formulario. <BR>
*        <b>Comprobar</b> - Booleano que indica si queremos que controle si ya se ha pulsado este 
*         botón anteriormente y todavía no ha podido contestar el servidor, evitando que un usuario
*         pueda dar varias veces al mismo botón, creyendo que no le ha dado, porque tarda en responder.
*         El valor por defecto de este parámetro es false
*
* @return <b>true</b> - si todo va correctamente y se envían los datos.<BR>
*         <b>false</b> - si hay algún problema y los datos no se pueden enviar.
* @example submitCommandFormParameter("FIND", document.forms[0].inpClave, "12", false, null, null, null, true);
*/
function submitCommandFormParameter(accion, campo, valor, bolDepurar, Formulario, formAction, newTarget, bolComprobar)
{
	if (bolDepurar!=null && bolDepurar==true)
		if (!depurar(accion)) return false;
	if (Formulario == null)
		Formulario = document.forms[0];

	if (confirmar(accion)) {
		campo.value = valor;
		if (formAction != null)
			Formulario.action = formAction;
		if (newTarget != null)
			Formulario.target = newTarget;
		submitForm(Formulario.Command, accion, Formulario, bolComprobar);
	}
	return true;
}


/**
* @name campoNumerico
* @format function campoNumerico(CampoNumerico, Decimales, Negativo)
* @comment Es la función encargada de controlar que los datos introducidos en un campo sean 
*          numéricos, de tal forma que si no lo son, será la propia función la que lance un mensaje 
*          de error y posicione el foco en el control. Se nos va a permiter controlar que el número 
*          que se haya introducido sea un número entero o no, e incluso que sólo sea positivo o no.
*
* @param <b>CampoNumerico</b> - Objeto que referencia el control de la página que queremos depurar.<BR> 
*        <b>Decimales</b> - Booleano que indica si se admiten números decimales o no. <BR>
*        <b>Negativos</b> - Booleano que indica si se admiten números negativos o no. 
* @return <b>true</b> - si el contenido del campo es numérico.<BR>
*         <b>false</b> - si no es numérico o no cumple alguno de los requisitos especificados.
* @example campoNumerico(document.forms[0].inpImporte, true, false);
* @see @link esNumerico , @link esNumero
*/
function campoNumerico(CampoNumerico, bolDecimales, bolNegativo)
{
	if (!esNumero(CampoNumerico.value, bolDecimales, bolNegativo))
	{
		mensaje(4);
		CampoNumerico.focus();
		CampoNumerico.select();
		return false;
	}
	return true;
}


/**
* @name esNumero
* @format function esNumero(ValorNumerico, Decimales, Negativo, EliminarLetras)
* @comment Recorre el texto pasado, controlando si todos sus elementos son numéricos o no
*
* @param <b>ValorNumerico</b> - String que contiene el número a depurar.<BR> 
*        <b>Decimales</b> - Booleano que indica si se admiten números decimales o no. <BR>
*        <b>Negativos</b> - Booleano que indica si se admiten números negativos o no.
* @return <b>true</b> - si el contenido del campo es numérico.<BR>
*         <b>false</b> - si no es numérico o no cumple alguno de los requisitos especificados.
*/
function esNumero(strValorNumerico, bolDecimales, bolNegativo) {
  var bolComa = false;
  var esNegativo = false;
  var i=0;
  if (strValorNumerico == null || strValorNumerico=="") return true;
  if (strValorNumerico.substring(i, i+1)=="-") {
    if (bolNegativo !=null && bolNegativo) {
      esNegativo = true;
      i++;
    } else {
      return false;
    }
  } else if (strValorNumerico.substring(i, i+1)=="+")
    i++;
	for (i=i;i<strValorNumerico.length;i++) {
		if (isNaN(strValorNumerico.substring(i,i+1))) {
      if (bolDecimales && ( strValorNumerico.substring(i,i+1)=="." || strValorNumerico.substring(i,i+1)==",") && !bolComa) 
        bolComa = true;
		  else
			  return false;
    }
	}
	return true;
}

/*	Recorre el texto pasado, controlando si todos sus elementos son numéricos o no y luego da
	la opción de eliminar aquellos elementos no númericos
*/
function esNumerico(txtCampoNumerico, bolDecimales, bolNegativo, bolEliminarLetras)
{
	var numResultado = "";
	var bolNumerico = true;
  var bolComa = false;
  var esNegativo = false;
  var i=0;
	if (txtCampoNumerico.value == null || txtCampoNumerico.value=="") return true;
	
  if (txtCampoNumerico.value.substring(i, i+1)=="-") 
  {
    if (bolNegativo !=null && bolNegativo) 
    {
      numResultado = numResultado + txtCampoNumerico.value.substring(i, i+1);
      esNegtivo = true;
      i++;
    } 
    else
      bolNumerico = false;
  }
  else if (txtCampoNumerico.value.substring(i, i+1)=="+")
    i++;
	for (i=i;i<txtCampoNumerico.value.length;i++)
	{
		if (!isNaN(txtCampoNumerico.value.substring(i,i+1)))
			numResultado = numResultado + txtCampoNumerico.value.substring(i,i+1);
    else if (bolDecimales && txtCampoNumerico.value.substring(i,i+1)=="." && !bolComa)
    {
      numResultado = numResultado + txtCampoNumerico.value.substring(i,i+1);
      bolComa = true;
    }
		else
			bolNumerico = false;
	}
	if (bolEliminarLetras)
		txtCampoNumerico.value = numResultado;
	return bolNumerico;
}

/**
* @name separarPor
* @format function separarPor(Texto, Separador)
* @comment Separa el <b>Texto</b> pasado por el caracter que se le indique en el <b>Separador</b>.
* @param <b>Texto</b> - texto que queremos separar en partes que se encuentran delimitadas por un
*         carácter.<BR>
*        <b>Separador</b> - carácter que hace de delimitador de cada parte que forma el <b>Texto</b>.
* @return devuelve un <b>Array</b> que contiene cada una de las partes encontradas en el <b>Texto</b>.
*/
function separarPor(strTexto, strSeparador)
{
	var n1=0;
	var i=0;
	var incr = strSeparador.length;
	var n = strTexto.indexOf(strSeparador);
	var vecDatos = new Array();
	while (n!=-1)
	{
		vecDatos[i++] = strTexto.substring(n1, n1 + n);
		n1 = n1 + n + incr;
		n = strTexto.substring(n1).indexOf(strSeparador);
	}
	if (n1!=strTexto.length)
		vecDatos[i] = strTexto.substring(n1);
	return vecDatos;
}


/**
* @name abrirNuevo
* @format function abrirNuevo(Pagina, Ventana, Height, Width, Top, Left)
* @comment La finalidad de esta función es la de abrir una nueva ventana con la página que se le 
*          indique para presentar los datos en otra ventana distinta de la que estamos utilizando. 
*          Elimina los elementos del navegador tales como la barra de direcciones, los botones..., 
*          a la vez que se programa para que cuando se salga de la pantalla que la lanzó se cierre 
*          automáticamente este nueva ventana, evitando así que puedan haber ventanas abiertas sin 
*          ninguna utilidad.
*
* @param <b>Pagina</b> - URL de la página que queremos que se presente en la nueva ventana. <BR>
*        <b>Ventana</b> - Nombre que queremos dar a la nueva ventana. Este nombre sirve para poder 
*           hacer que otros elementos de la página la puedan utilizar mientras esté abierta por medio
*           de los target. <BR>
*        <b>Height</b> - Es el alto total de la ventana. <BR>
*        <b>Width</b> - Es el ancho total de la ventana. <BR>
*        <b>Top</b> - Es la posición superior en la que queremos que se sitúe a la ventana al 
*           abrirse. <BR>
*        <b>Left</b> - Es la posición izquierda en la que queremos que se sitúe a la ventana al 
*           abrirse. <BR>
* @return Devuelve un objeto que referencia a la ventana abierta, aunque pocas veces se va a 
*         necesitar este objeto.
* @example abrirNuevo("Inicio.html", "Inicio", 300, 300, 0, 0); 
* @see @link abrirPDF
*/
function abrirNuevo(strPagina, strVentana, strHeight, strWidth, strTop, strLeft)
{
	var complementosNS4 = ""
	if (navigator.appName.indexOf("Netscape"))
		complementosNS4 = "alwaysRaised=1, dependent=1, directories=0, hotkeys=0, menubar=0, ";
	var complementos = complementosNS4 + "height=" + strHeight + ", width=" + strWidth + ", left=" + strLeft + ", top=" + strTop + ", location=0, resizable=0, scrollbars=1, status=0, toolbar=0";
	var winPopUp = window.open(strPagina,strVentana, complementos);
	window.onunload = function(){winPopUp.close();}
	return winPopUp;
}


/**
* @name abrirPDF
* @format function abrirPDF(Pagina, Ventana)
* @comment Esta función abre una página que le indiquemos en una nueva ventana a la que le elimina 
*          todos los elementos de navegación, barra de direcciones..., con el fin de hacer que 
*          únicamente sirva para presentar informes. Se utiliza para la presentación de los informes 
*          PDF de la aplicación. El sólo calcula el tamaño de la pantalla, ajustando el tamaño de la 
*          nueva ventana para que ocupe toda la pantalla. Una característica de la nueva ventana es 
*          que si se sale de la página que la lanzó se cierra automáticamente
*
* @param <b>Pagina</b> - URL de la página que queremos que se presente en la nueva ventana. <BR>
*        <b>Ventana</b> - Nombre que queremos dar a la nueva ventana. Este nombre sirve para poder 
*           hacer que otros elementos de la página la puedan utilizar mientras esté abierta por 
*           medio de los target.
* @return Devuelve un objeto que referencia a la ventana abierta, aunque pocas veces se va a 
*         necesitar este objeto.
* @example abrirPDF("Informe.pdf", "Informe");
* @see @link abrirNuevo
*/
function abrirPDF(strPagina, strVentana)
{
	var complementosNS4 = ""
	if (navigator.appName.indexOf("Netscape"))
		complementosNS4 = "alwaysRaised=1, dependent=1, directories=0, hotkeys=0, menubar=0, ";
	var complementos = complementosNS4 + "height=" + (screen.height - 50) + ", width=" + (screen.width - 10) + ", left=0, top=0, location=0, status=0, resizable=1, toolbar=0, scrollbars=1, ";
	var winPopUp = window.open(strPagina,strVentana, complementos);
	window.onunload = function(){winPopUp.close();}
	return winPopUp;
}


function abrirPopUp(strPagina, strVentana, strHeight, strWidth) {
	var complementosNS4 = ""

  if (strHeight==null) strHeight=250;
  if (strWidth==null) strWidth=230;
  var strTop=parseInt((screen.height - strHeight)/2);
  var strLeft=parseInt((screen.width - strWidth)/2);
  
  if (navigator.appName.indexOf("Netscape"))
    complementosNS4 = "alwaysRaised=1, dependent=1, directories=0, hotkeys=0, menubar=0, ";
  var complementos = complementosNS4 + "height=" + strHeight + ", width=" + strWidth + ", left=" + strLeft + ", top=" + strTop + ", screenX=" + strLeft + ", screenY=" + strTop + ", location=0, resizable=0, scrollbars=0, status=0, toolbar=0, titlebar=0";
  var winPopUp = window.open(strPagina, strVentana, complementos);
  if (winPopUp!=null) {
    winPopUp.focus();
    document.onunload = function(){winPopUp.close();};
    document.onmousedown = function(){winPopUp.close();};
  }
  return winPopUp;
}



/**
* @name pulsarTecla
* @format function pulsarTecla(CodigoTecla)
* @comment Esta función es interna y es ejecutada por otras funciones que activan el control de
*          eventos en una ventana HTML. Asocian esta función al evento <b>KeyDown</b> de la página, 
*          controlando así las pulsaciones de teclas en la página. Esta función se encarga de controlar
*          la pulsación de la tecla <em>ENTER<em>, para ejecutar una acción por defecto.
*
* @param <b>CodigoTecla</b> - Es el código ASCII de la tecla que se ha pulsado. Este código lo pasa
*         el propio controlador de eventos, por lo que no tenemos que preocuparnos de él.
* @return <b>true</b> - en caso de no haber pulsado ninguna de las teclas a controlar.<BR>
*         <b>false</b> - si se ha pulsado alguna de las teclas a controlar.
*/

function pulsarTecla(CodigoTecla)
{
	if (gBotonPorDefecto!=null)
	{
		var tecla = null;

    if (calculaNavegador()=="Netscape")
      tecla = (document.getElementById) ? CodigoTecla.which : event.keyCode;
    else 
      tecla = (document.layers) ? CodigoTecla.which : event.keyCode;
		if (tecla == 13)
		{
			eval(gBotonPorDefecto);
			return false;
		}
	}
  return true;
}


/**
* @name porDefecto
* @format function porDefecto(Accion)
* @comment Esta función se encarga de establecer una <b>Accion</b> por defecto en la página, es decir, 
*          la que se ejecutará al pulsar la tecla <em>ENTER</em>.<BR>
*          La <b>Accion</b> se le pasa en formato de texto, pero ha de ser un comando perfectamente 
*          ejecutable. No es bueno abusar de esta función, porque se pueden mezclar funciones. <BR>
*          Es importante saber que en las páginas de tipo frame, esta función es común a los frames, 
*          por lo que sólo podremos establecer en un frame esta función pero teniendo cuidado de que 
*          el usuario no pueda ponerse en otro frame pulsando <em>ENTER</em> porque, en tal caso, 
*          se ejecutará este comando igualmente, pudiéndo producirse algún error no deseado.
*
* @param <b>Accion</b> - es el comando que se debe ejecutar en caso de pulsar <em>ENTER</em>.
* @example porDefecto("alert('Hola')");
*/
function porDefecto(accion)
{
	gBotonPorDefecto = accion;
	if (!document.all)
	{
		document.captureEvents(Event.KEYDOWN);
	}
	document.onkeydown=pulsarTecla;
  return true;
}


/**
* @name Teclas
* @format function Teclas(tecla, evento, teclaAuxiliar)
* @comment Esta función sirve para ir formando el array de teclas para cada pantalla.<BR>
*          Cada tecla que queremos utilizar debe contener esta estrtuctura.
*
* @param <b>tecla</b> - es la tecla que se debe pulsar en formato texto. No diferencia entre
*                       mayúsculas y minúsculas.<BR>
*        <b>evento</b> - Se trata de la acción que queremos que se ejecute cuando se pulse
*                        dicha tecla. Se le debe pasar el código a ejecutar como si fuese un
*                        strring.<BR>
*        <b>teclaAuxiliar</b> - Sus valores serán, <em>CTRL</em>, <em>ALT</em> ó <em>null</em>, 
*                               donde <em>CTRL</em> indica que se debe pulsar CONTROL a la que
*                               la tecla que se ha especificado, <em>ALT</em> indica que se debe
*                               pulsar ALTERNATIVA a la vez que la tecla indicada y <em>null</em> 
*                               indica que no se debe pulsar ninguna tecla a la vez.
* @example Teclas("A", "alert('Hola')", null);
*/
function Teclas(tecla, evento, teclaAuxiliar) {
  this.tecla = tecla;
  this.evento = evento
  this.teclaAuxiliar = teclaAuxiliar;
}


/**
* @name obtenerCodigoTecla
* @format function obtenerCodigoTecla(codigo)
* @comment Se trata de una función interna que devuelve el código de la tecla que corresponde 
*          a la letra pasada.
*
* @param <b>codigo</b> - Es el texto que corresponde a la letra de la que queremos obtener su
*                        codigo de tecla.
* @return el código de la tecla de la letra pasada.
* @example obtenerCodigoTecla("A");
*/
function obtenerCodigoTecla(codigo) {
  if (codigo==null) return 0;
  else if (codigo.length==1) return codigo.toUpperCase().charCodeAt(0);
  switch (codigo.toUpperCase()) {
    case "BACKSPACE": return 8;
    case "ENTER": return 13;
    case "SPACE": return 32;
    case "DELETE": return 46;
    case "INSERT": return 45;
    case "END": return 35;
    case "HOME": return 36;
    case "REPAGE": return 33;
    case "AVPAGE": return 34;
    case "LEFTARROW": return 37;
    case "RIGHTARROW": return 39;
    case "UPARROW": return 38;
    case "DOWNARROW": return 40;
    case "NEGATIVE": return 189;
    case "NUMBERNEGATIVE": return 109;
    case "DECIMAL": return 190;
    case "NUMBERDECIMAL": return 110;
    case "ESCAPE": return 27;
    case "COMA": return 188;
    case "F1": return 112;
    case "F2": return 113;
    case "F3": return 114;
    case "F4": return 115;
    case "F5": return 116;
    case "F6": return 117;
    case "F7": return 118;
    case "F8": return 119;
    case "F9": return 120;
    case "F10": return 121;
    case "F11": return 122;
    case "F12": return 123;
    case "SHIFT": return 16;
    case "CTRL": return 17;
    case "ALT": return 18;
    case "shiftKey": return 16;
    case "ctrlKey": return 17;
    case "altKey": return 18;
    default: return 0;
  }
}


/**
* @name controlTecla
* @format function controlTecla(CodigoTecla)
* @comment Se encarga de controlar la pulsación de teclas en una página, comprobando que 
*          no se pulse ninguna de las teclas especificadas en el array global arrTeclas, en
*          cuyo caso procede a ejecutar la acción asociada a dicha tecla en dicho array.
*
* @param <b>CodigoTecla</b> - Es el código de la tecla pulsada por el usuario.
* @return <b>true</b> - en caso de no pulsarse ninguna de las teclas del array.<BR>
*         <b>false</b> - en caso de pulsarse una tecla del array arrTeclas.
*/
function controlTecla(CodigoTecla) {
  if (arrTeclas==null || arrTeclas.length==0) return true;
  var tecla = (document.layers) ? CodigoTecla.which : event.keyCode;
  for (var i=0;i<arrTeclas.length;i++) {
    if (tecla == obtenerCodigoTecla(arrTeclas[i].tecla)) {
      if (gAUXILIAR) {
        if (arrTeclas[i].teclaAuxiliar==null || arrTeclas[i].teclaAuxiliar!="") {
          gAUXILIAR=0;
          eval(arrTeclas[i].evento);
          return false;
        }
      } else if (gAUXILIAR==obtenerCodigoTecla(arrTeclas[i].teclaAuxiliar)) {
        gAUXILIAR=0;
        eval(arrTeclas[i].evento);
        return false;
      }
    }
  }
  if (tecla==obtenerCodigoTecla("SHIFT") || tecla==obtenerCodigoTecla("CTRL") || tecla==obtenerCodigoTecla("ALT")) {
    gAUXILIAR=tecla;
    setTimeout('gAUXILIAR=0', 250);
  } else {
    gAUXILIAR=0;
  }
  return true;
}


/**
* @name activarControlTeclas
* @format function activarControlTeclas()
* @comment Es la encargada de activar el controlador de pulsación de teclas para la página.<BR>
*          Esta función se deberá activar tras haber definido el array de teclas global en dicha 
*          página, es decir, <em>arrTeclas</em>.
*
* @example onLoad="activarControlTeclas();"
*/
function activarControlTeclas() {
  if (arrTeclas==null || arrTeclas.length==0) return true;

  if (!document.all)
    document.captureEvents(Event.KEYDOWN);
  document.onkeydown=controlTecla;
  return true;
}


/**
* @name obtenerDetalle
* @format function obtenerDetalle(Campo, ArrayDatos, SpanId)
* @comment Esta función se hizo para sustituir a los combo en los multilínea, de forma que en el
*          <b>Campo</b> se introduce el código o el valor clave que identifica a un elemento del
*          <b>ArrayDatos</b>, que se identifican por el primer elemento de cada registro y , esta
*          función, colocará la descripción correspondiente a dicha clave (es decir, el segundo
*          elemento del <b>ArrayDatos</b>) en un span que es el que tiene el id <b>SpanId</b>.<BR>
*          Para que esta función funcione dinámicamente, se suele colocar en el evento <b>onKeyUp</b>
*          del <b>Campo</b>.
*
* @param <b>Campo</b> - es un objeto que referencia al control de la página en el que se introduce
*         el código o clave que identifica a cada uno de los registros del array.<BR>
*        <b>ArrayDatos</b> - es un array que contiene los registros que se pueden seleccionar en 
*         el <b>Campo</b>. Eston registros están en formato (clave, descripción), de forma que el
*         valor introducido en el <b>Campo</b> se buscará en el primer campo del array y, en el Span,
*         se presentará el valor contenido en el segundo campo del array. <BR>
*        <b>SpanId</b> - es el id que identifica al span, div o layer de la página en el que queremos
*         que se presente la descripción del registro seleccionado en el <b>Campo</b>.
* @return <b>true</b> - si encuentra el valor entre las claves del <b>ArrayDatos</b>. <BR>
*         <b>false</b> - si no encuentra el valor.
*/
function obtenerDetalle(campo, arrDatos, spanId)
{
	if (campo==null || campo.value=="") return false;
	else if (arrDatos==null || arrDatos.length==0) return false;
	else if (spanId==null) return false;

	for (var i=0;i<arrDatos.length;i++)
	{
		if (arrDatos[i][0] == campo.value)
		{
			layer(spanId, arrDatos[i][1], true);
			return true;
		}
	}
	layer(spanId, "", true);
	mensaje(6);
	campo.value = "";
	campo.focus();
	campo.select();
	return false;
}


/**
* @name layer
* @format function layer(Span, Texto, esId)
* @comment Esta función permite introducir un texto en objeto span, div o layer. Su finalidad es la 
*          de poder cambiar texto en una página HTML de forma dinámica sin que el texto deba estar en 
*          un campo de formulario.
*
* @param <b>Span</b> - Objeto que referencia a un span, div o layer de la página o el id de uno de 
*         esos objetos que exista en la página. <BR>
*        <b>Texto</b> - Texto que queremos que ponga en el span, div o layer. Si ponemos "", entonces,
*         lo deja vacío. <BR>
*        <b>esID</b> - Booleano que indica a la función si el primer parámetro que se le ha pasado es
*         el id (true) o el objeto (false). 
* @example layer("idSpan", "HOLA", true);
*/
function layer(nodo, strTexto, esId)
{
	if (strTexto==null)
		strTexto = "";

	if (document.layers)
	{
		if (esId!=null && esId)
			nodo = document.layers[nodo];
		nodo.document.write(strTexto);
		nodo.document.close();
	}
	else if (document.all)
	{
		if (esId!=null && esId)
			nodo = document.all[nodo];
		nodo.innerHTML = strTexto;
	}
	else if (document.getElementById) 
	{
		if (esId!=null && esId)
			nodo = document.getElementById(nodo);
		var range = document.createRange();
		range.setStartBefore(nodo);
		var domfrag = range.createContextualFragment(strTexto);
		while (nodo.hasChildNodes())
		{
			nodo.removeChild(nodo.lastChild);
		}
		nodo.appendChild(domfrag);
	}
}


/**
* @name rellenarCombo
* @format function rellenarCombo(Combo, ArrayDatos, Selected)
* @comment Rellena un <b>Combo</b> con los valores del <b>ArrayDatos</b>. Admite que se ponga un 
*          valor seleccionado en el <b>Combo</b>, que será el que se indique como tal en el 
*          <b>ArrayDatos</b>.
*
* @param <b>Combo</b> - referencia a un objeto del tipo combo, que es el que queremos rellenar con
*         los valores del <b>ArrayDatos</b>. <BR>
*        <b>ArrayDatos</b> - es un Array que contiene los valores que queremos que aparezcan en el
*         <b>Combo</b>. Su formato es (value, texto, selected), donde <em>valor</em> es el value que 
*         tendrá en <b>Combo</b>, <em>texto</em> es el texto que se verá en la lista desplegable y 
*         <em>selected</em> es un campo que tendrá el valor <strong>true</strong> o 
*         <strong>false</strong>, dependiendo de si queremos que ese registro aparezca seleccionado 
*         en el <b>Combo</b>. Este último campo (<em>selected</em>) sólo será necesario si queremos
*         que esta función establezca valos seleccionados en el <b>Combo</b>. <BR>
*        <b>Selected</b> - es un Booleano que indica si queremos que al rellenar el <b>Combo</b> se
*         ponga algún valor como seleccionado.<BR>
*        <b>sinBlanco</b> - para hacer que se elimine le primer elemento en blanco del combo. Recibe
*         valores booleanos.
*/
function rellenarCombo(combo, arrayDatos, bolSelected, sinBlanco) {
  var i;
  for (i = combo.options.length;i>=0;i--)
    combo.options[i] = null;
  i=0;
  if (sinBlanco==null || !sinBlanco)
    combo.options[i++] = new Option("", "");
  if (arrayDatos==null) return false;

  for (var j=0;j<arrayDatos.length;j++) {
    combo.options[i] = new Option(arrayDatos[j][1], arrayDatos[j][0]);
    if (bolSelected!=null && bolSelected)
      combo.options[i].selected = arrayDatos[j][2];
    i++;
  }
  return true;
}


/**
* @name valorArray
* @format function valorArray(ArrayDatos, Clave, Posicion)
* @comment Devuelve el valor del campo que está en la <b>Posicion</b> indicada, del registro cuyo
*          primer campo tenga el valor <b>Clave</b>.
*
* @param <b>ArrayDatos</b> - Array que contiene los registros entre los que buscar. <BR>
*        <b>Clave</b> - Valor que hay que buscar en el primer campo del <b>ArrayDatos</b>. <BR>
*        <b>Posicion</b> - Posición del campo que contiene la descripción que queremos obtener. De
*           este modo, podemos devolver cualquier campo del array
* @return Devuelve el valor del campo indicado o blanco si no se encuentra ningún registro con esa
*         <b>Clave</b>.
*/
function valorArray(arrDatos, strClave, intDevolverPosicion)
{
  if (arrDatos == null) return "";
  else if (strClave==null) return "";
  if (intDevolverPosicion==null) intDevolverPosicion = 1;

  for (var i=0;i<arrDatos.length;i++) {
    if (arrDatos[i][0] == strClave) {
      return arrDatos[i][intDevolverPosicion];
    }
  }
  return "";
}


/**
* @name radioValue
* @format function radioValue(Radio)
* @comment Se encarga de obtener el valor seleccionado de un radio button que exista en la página. La
*          complejida de esta función viene en que sirve tanto para obtener el valor seleccionado 
*          cuando sólo hay un campo asociado al radio button que se le pase y, también, cuando sean 
*          más de uno, como en el caso de una lista de valores de entre los que sólo podemos elegir 
*          uno y que están representados por radio buttons.
*
* @param <b>Radio</b> - es un objeto que referencia al radio button del que queremos sacar el valor 
*           seleccionado.
* @return Devuelve el valor seleccionado o null en caso de encontrarlo.
* @example radioValue(document.forms[0].inpRadioButton);
*/
function radioValue(radio)
{
  if (!radio) return null;
  else if (!radio.length)
    return radio.value;
	for (var i=0;i<radio.length;i++)
	{
		if (radio[i].checked)
			return radio[i].value;
	}
	return null;
}


/**
* @name marcarTodos
* @format function marcarTodos(Check, Marcar)
* @comment Es muy útil, porque se encarga de marcar o desmarcar todos los checkBox, asociados al 
*          checkBox que se le pase. Se ha utilizado para los links de marcar y desmarcar todos de 
*          las páginas que tienen un checkbox por cada línea que presentan y se permite seleccionar 
*          mediante los checks una o más de una para realizar operaciones con las mismas. Lo bueno 
*          de esta función es que es independiente el hecho de que exista sólo un checkBox asociado 
*          o más.
*
* @param <b>Check</b> - es un objeto que referencia al check de la página que queremos marcar o 
*           desmarcar. <BR>
*        <b>Marcar</b> - es un booleano que indica si la operación a realizar es la de marcar o 
*           la de desmarcar.
* @return <b>false</b> - en caso de no encontrar el check indicado. <BR>
*         <b>true</b> - en los demás casos.
* @example marcarTodos(document.TITULOS.inpCheck, true);
*/
function marcarTodos(chk, bolMarcar)
{
  if (bolMarcar==null) bolMarcar = false;
	if (!chk) return false;
	else if (!chk.length) chk.checked = bolMarcar;
	for (var i=0;i<chk.length;i++)
		chk[i].checked = bolMarcar;
	return true;
}


/**
* @name cambiarListaCombo
* @format function cambiarListaCombo(combo, arrayDatos, clave, blanco)
* @comment Para los arrays que se recargan desde la propia página al cambiar el valor seleccionado 
*          en algún otro combo
*
* @param <b>combo</b> - es un objeto que referencia al combo que queremos rellenar con los nuevos 
*           valores.<BR>
*        <b>arrayDatos</b> - Es el array que contiene los datos que van a formar los valores del
*           combo.<BR>
*        <b>clave</b> - Es el valor de la clave que identifica los valores que hay que poner en el
*           combo. Es el valor del primer campo del array.<BR>
*        <b>blanco</b> - Es un booleano que indica si hay que poner un elemento en blanco (true) en
*           el combo o no (false).
* @example cambiarListaCombo(document.frmEdicion.inpCombo, arrayProvincias, "1", false);
*/
function cambiarListaCombo(combo, arrayDatos, clave, blanco) {
  var i;
  var n=0;
  if (combo.options.length!=null) {
  for (i = combo.options.length;i>=0;i--)
    combo.options[i] = null;
  }
  
  if (blanco)
    combo.options[n++] = new Option("", "");
  if (arrayDatos==null) return false;

  for (i=0;i<arrayDatos.length;i++) {
    if (arrayDatos[i][0]==clave)
      combo.options[n++] = new Option(arrayDatos[i][2], arrayDatos[i][1]);
  }
  return true;
}


/**
* @name seleccionarImagen
* @format function seleccionarImagen(nombreLink)
* @comment Posiciona el foco del cursor en la imagen que se le indique.
*
* @param <b>nombreLink</b> - Es un String que indica el nombre del link donde está la imagen.
* @example seleccionarImagen('Link1');
*/
function seleccionarImagen(nombreLink) {
  var boton = (document.layers) ? document.links[nombreLink] : document.anchors.item(nombreLink);
  boton.focus();
}


/**
* @name marcarImagen
* @format function marcarImagen(strImagen)
* @comment Marca la imagen seleccionada.
*
* @param <b>strImagen</b> - Es un String que indica el nombre de la imagen.
* @example marcarImagen('Imagen1');
*/
function marcarImagen(strImagen) {
  bordeImagen(strImagen, 2);
}


/**
* @name desmarcarImagen
* @format function desmarcarImagen(strImagen)
* @comment Desmarca la imagen seleccionada.
*
* @param <b>strImagen</b> - Es un String que indica el nombre de la imagen.
* @example desmarcarImagen('Imagen1');
*/
function desmarcarImagen(strImagen) {
  bordeImagen(strImagen, 0);
}


/**
* @name bordeImagen
* @format function bordeImagen(strImagen, intBorde)
* @comment Pone borde a la imagen seleccionada.
*
* @param <b>strImagen</b> - Es un String que indica el nombre de la imagen.<BR>
* @param <b>intBorde</b> - Es un Entero que indica el grosor del borde de la imagen.
* @example bordeImagen('Imagen1', 1);
*/
function bordeImagen(strImagen, intBorde) {
  document.images[strImagen].border=intBorde;
}


/**
* @name filtrarCombo
* @format function filtrarCombo(combo, strTexto, bolComienza)
* @comment Selecciona el valor del combo que más se asemeja al texto pasado.
*
* @param <b>combo</b> - Es un objeto que referencia al combo en el que se quiere filtrar.<BR>
* @param <b>strTexto</b> - Es el texto que se desea buscar en el combo.<BR>
* @param <b>bolComienza</b> - Indica si se quiere buscar los elementos del combo que comiencen
*           por el texto indicado (true) o los que contengan el texto (false).
* @example filtrarCombo(document.frmFormulario.combo1, 'buscar', true);
*/
function filtrarCombo(combo, strTexto, bolComienza) {
  if (!combo || combo==null) return false;
  else if (strTexto==null || strTexto == "") return false;
  bolComienza=(bolComienza==null)?false:bolComienza;
  var j=-1;
  var i=-1;
  var bolEncontrado=false;
  for (i=0;i<combo.length && !bolEncontrado;i++) {
    j=combo[i].text.indexOf(strTexto);
    if (bolComienza) bolEncontrado=(j==0);
    else bolEncontrado=(j!=-1);
  }
  if (bolEncontrado) combo.selectedIndex=i;
  return bolEncontrado;
}

function obtenerControl(NombreCampo, Formulario) {
  if (Formulario==null)
    Formulario=document.forms[0];

  for(var i=0;i<Formulario.length; i++) {
    if (Formulario.elements[i].name == NombreCampo) return Formulario.elements[i];
  }
  return null;
}


function limpiarLista(campo) {
  if (campo==null) return false;
  for (var i = campo.options.length - 1;i>=0;i--)
    campo.options[i] = null;
  return true;
}


function eliminarElementosList(campo) {
  if (campo==null) return false;
  for (var i = campo.options.length - 1;i>=0;i--) {
    if (campo.options[i].selected)
      campo.options[i] = null;
  }
  return true;
}

function generarArrayList(combo, resultado) {
  var n=0;
  if (combo==null) {
    resultado=null;
    return;
  }
  for (var i = combo.options.length-1;i>=0;i--) {
    if (combo.options[i].selected) {
      resultado[n++] = new Array(combo.options[i].value, combo.options[i].text);
    }
  }
}

function estaEnCombo(combo, clave) {
  if (combo==null || clave==null) return false;
  for (var i=0;i<combo.options.length;i++) {
    if (combo.options[i].value == clave) return true;
  }
  return false;
}


function insertarElementosList(campoDestino, arrayValores) {
  if (campoDestino == null || arrayValores == null) return false;
  var i = campoDestino.options.length;
  for (var j=0; j<arrayValores.length;j++) {
      if (!estaEnCombo(campoDestino, arrayValores[j][0]))
        campoDestino.options[i++] = new Option(arrayValores[j][1], arrayValores[j][0]);
  }
  return true;
}

function seleccionarListCompleto(campo) {
  if (campo==null || campo==null) return false;
  for (var i=0;i<campo.options.length;i++) {
    campo.options[i].selected = true;
  }
  return true;
}


function tamanoMaximo(campo, tamano, evt) {
	if (campo==null || !campo) return false;
	if (campo.value.length>=tamano) {
		if (document.layers) CodigoTecla.which=0;
		else event.keyCode=0;
		mensaje(28);
		return false;
	}
	return true;
}

function seleccionarCombo(arrDatos, clave, combo) {
  if (!combo || combo==null) return false;
  var valor = valorArray(arrDatos, clave);
  if (valor=="") return false;
  for (var i=0;i<combo.length;i++) {
    combo.options[i].selected = (combo.options[i].value == valor);
  }
  return true;
}


function mostrarMenu() {
  if (!top.frameMenu) window.open(strServletInicio, "_blank");
  else {
    var frame = top.document;
    var frameset = frame.getElementById("framesetMenu");
    if (!frameset) return false;
    
    if (frameset.cols.substring(0,2)=="30") frameset.cols = "3%,*";
	else frameset.cols = "30%,*";
    return true;
  }
}

function comboText(combo) {
  if (combo.selectedIndex == -1)
    return "";
  else
    return combo.options[combo.selectedIndex].text;
}

/**
* @name xx
* @format function xx()
* @comment Esta función no hace nada, simplemente sirve para ponerla en el diseño para ser sustituida, 
*          pero hacer que el diseño siga funcionando
*/
function xx()
{
  return true;
}

function ChangeProp(Formulario,objName,x,theProp,theValue) { //v6.0
var obj = objName;
if (Formulario==null)
  Formulario=document.forms[0];
eval(Formulario+"."+obj.name+".style."+theProp+"='"+theValue+"'");
}

function calculaNavegador()
{
  if(navigator.appName.indexOf("Netscape")!=-1)
    return "Netscape";
  else
    return "Explorer";
}

function calculaSistemaOperativo()
{
  if(navigator.userAgent.indexOf("5.1") != -1)
    return "XP";
  else
    return "NT";
}

function cambiarEstilo(id, estilo) {
  if (calculaNavegador() == "Explorer") 
    document.all[id].className=estilo;
  else if (calculaNavegador() == "Netscape") 
    document.getElementById(id).className=estilo;
}
/**
* @name auto_completar_numero
* @format function auto_completar_numero(campo, decimal, negativo)
* @comment Es una función de control de evento de pulsación de teclado que nos permite 
*          controlar si se trata de una pulsación numérica permitida o no. Se colocará 
*          en el evento onKeyDown u onKeyUp del campo sobre el que queremos controlar 
*          que sólo se introduzcan números.
*
* @param <b>campo</b> - Es el campo sobre el que queremos controlar la introducción de números. 
*         Lo normal es que utilicemos el objeto this.<BR>
*        <b>decimal</b> - Booleano que indica si queremos que se admitan decimales para el número.<BR>
*        <b>negativo</b> - Booleano que indica si admitimos números negativos. 
*
* @example onKeyUp="auto_completar_numero(this, true, true);return true;"
*/
function auto_completar_numero(obj, bolDecimal, bolNegativo, evt) {
  return auto_completar_numero(obj, bolDecimal, bolNegativo, false, evt);
}

/**
* @name auto_completar_numero
* @format function auto_completar_numero(campo, decimal, negativo)
* @comment Es una función de control de evento de pulsación de teclado que nos permite 
*          controlar si se trata de una pulsación numérica permitida o no. Se colocará 
*          en el evento onKeyDown u onKeyUp del campo sobre el que queremos controlar 
*          que sólo se introduzcan números.
*
* @param <b>campo</b> - Es el campo sobre el que queremos controlar la introducción de números. 
*         Lo normal es que utilicemos el objeto this.<BR>
*        <b>decimal</b> - Booleano que indica si queremos que se admitan decimales para el número.<BR>
*        <b>negativo</b> - Booleano que indica si admitimos números negativos. 
*        <b>coma</b> - Booleano que indica si admitimos coma. 
*
* @example onKeyUp="auto_completar_numero(this, true, true);return true;"
*/
function auto_completar_numero(obj, bolDecimal, bolNegativo, bolComa, evt) {
  var numero;

  if (document.all) evt = window.event;
  if (document.layers) { numero = evt.which; }
  if (document.all)    { numero = evt.keyCode;}
  if (numero != obtenerCodigoTecla("ENTER") && numero != obtenerCodigoTecla("LEFTARROW") && numero != obtenerCodigoTecla("RIGHTARROW") && numero != obtenerCodigoTecla("UPARROW") && numero != obtenerCodigoTecla("DOWNARROW") && numero != obtenerCodigoTecla("DELETE") && numero != obtenerCodigoTecla("BACKSPACE") && numero != obtenerCodigoTecla("END") && numero != obtenerCodigoTecla("HOME") && !evt["ctrlKey"]) {
    if (numero>95 && numero <106 ) { //Teclado numérico
      numero = numero - 96;
      if(isNaN(numero)) {
        if (document.all) evt.returnValue = false;
        return false;
      }
    } else if (numero!=obtenerCodigoTecla("DECIMAL") && numero != obtenerCodigoTecla("NUMBERDECIMAL") && numero != obtenerCodigoTecla("NEGATIVE") && numero != obtenerCodigoTecla("NUMBERNEGATIVE") && numero != obtenerCodigoTecla("COMA")) { //No es "-" ni "." ni ","
      numero = String.fromCharCode(numero);
      if(isNaN(numero)) {
        if (document.all) evt.returnValue = false;
        return false;
      }
    } else if (numero==obtenerCodigoTecla("DECIMAL") || numero==obtenerCodigoTecla("NUMBERDECIMAL")) { //Es "."
      if (bolDecimal && (obj.value==null || obj.value.indexOf(".")==-1)) return true;
      if (document.all) evt.returnValue = false;
      return false;
    } else if (numero==obtenerCodigoTecla("COMA")) { //Es ","
      if (bolComa && (obj.value==null || obj.value.indexOf(",")==-1)) return true;
      if (document.all) evt.returnValue = false;
      return false;
    } else { //Es "-"
      if (bolNegativo && (obj.value==null || obj.value.indexOf("-")==-1)) return true;
      if (document.all) evt.returnValue = false;
      return false;
    }
  }
  return true;
}
