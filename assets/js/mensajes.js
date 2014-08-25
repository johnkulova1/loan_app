//Valores por defecto
var LNG_POR_DEFECTO = 0;
var TIPO_POR_DEFECTO = 0;

function tipoMensaje(intMensaje, intTipo)
{
	this.Mensaje = intMensaje;
	this.Tipo = intTipo;
}

function textoMensajes(intIdioma, intMensaje, strTexto, strPorDefecto)
{
	this.Idioma = intIdioma;
	this.Mensaje = intMensaje;
	this.Texto = strTexto;
	this.PorDefecto = strPorDefecto;
}


//TIPOS
var arrTipos = new Array(
new tipoMensaje(0,0),
new tipoMensaje(1,0),
new tipoMensaje(2,1),
new tipoMensaje(3,1),
new tipoMensaje(4,0),
new tipoMensaje(5,0),
new tipoMensaje(6,0),
new tipoMensaje(7,0),
new tipoMensaje(8,0),
new tipoMensaje(9,0),
new tipoMensaje(10,0),
new tipoMensaje(11,0),
new tipoMensaje(12,0),
new tipoMensaje(13,0),
new tipoMensaje(14,0),
new tipoMensaje(15,0),
new tipoMensaje(16,0),
new tipoMensaje(16,0),
new tipoMensaje(17,0),
new tipoMensaje(18,1),
new tipoMensaje(19,0),
new tipoMensaje(20,0),
new tipoMensaje(21,0),
new tipoMensaje(22,0)
);

//MENSAJES
var arrMensajes = new Array(
//ESPAÑOL
new textoMensajes(0, 0, "The information has been processed successfully!", null),
new textoMensajes(0, 1, "All the necessary information has not been entered. You cannot continue!", null),
new textoMensajes(0, 2, "You are about to delete this information.\nAre you sure you want to continue?", null),
new textoMensajes(0, 3, "You are about to save this information.\nAre you sure you want to continue?", null),
new textoMensajes(0, 4, "The data entered is not numeric. Please enter correct data", null),
new textoMensajes(0, 5, "The date entered is incorrect. Please enter the date in the correct format", null),
new textoMensajes(0, 6, "Sorry! Unable to process the information", null),
new textoMensajes(0, 7, "The field is mandatory and must be entered", null),
new textoMensajes(0, 8, "You must GENERATE delivery note in order to be able to save information", null),
new textoMensajes(0, 9, "You must select a storage location", null),
new textoMensajes(0, 10, "You must select an entry", null),
new textoMensajes(0, 11, "The data entered is greater than the field size", null),
new textoMensajes(0, 12, "You must select a field in order to continue", null),
new textoMensajes(0, 13, "No information for this entry in this position", null),
new textoMensajes(0, 14, "The order is not in a provisional state, you cannot edit it", null),
new textoMensajes(0, 15, "This delivery note is not in provisional state", null),
new textoMensajes(0, 16, "Processing information, please wait...", null),
new textoMensajes(0, 17, "You must select a client", null),
new textoMensajes(0, 18, "You are about to save a delivery note. Are you sure you want to continue? ", null),
new textoMensajes(0, 19, "Este rappel de compra does not allow this operation because there is no restricted activity option", null),
new textoMensajes(0, 20, "The state encountered does not allow you to effect the operation", null),
new textoMensajes(0, 21, "You must select a teller", null),
new textoMensajes(0, 22, "The number entered cannot be greater than 59", null),
//INGLES
new textoMensajes(1, 0, "The information has been processed successfully!", null),
new textoMensajes(1, 1, "All the necessary information has not been entered. You cannot continue!", null),
new textoMensajes(1, 2, "You are about to delete this information.\nAre you sure you want to continue?", null),
new textoMensajes(1, 3, "You are about to save this information.\nAre you sure you want to continue?", null),
new textoMensajes(1, 4, "The data entered is not numeric. Please enter correct data", null),
new textoMensajes(1, 5, "The date entered is incorrect. Please enter the date in the correct format", null),
new textoMensajes(1, 6, "Sorry! Unable to process the information", null),
new textoMensajes(1, 7, "The field is mandatory and must be entered", null),
new textoMensajes(1, 8, "You should create first a provider before saving data", null),
new textoMensajes(1, 9, "You must select some storage place", null),
new textoMensajes(1, 10, "You must select an entry", null),
new textoMensajes(1, 11, "The data entered is greater than the field size", null),
new textoMensajes(1, 12, "You must select a field in order to continue", null),
new textoMensajes(1, 13, "No information for this entry in this position", null),
new textoMensajes(1, 14, "This element is not editable", null),
new textoMensajes(1, 15, "This element is not editable", null),
new textoMensajes(1, 16, "Processing information, please wait...", null)
);

function obtenerMensaje(index, idioma)
{
	if (idioma==null)
		idioma = LNG_POR_DEFECTO;
	for (var i=0;i<arrMensajes.length;i++)
	{
		if (arrMensajes[i].Idioma == idioma)
			if (arrMensajes[i].Mensaje == index)
				return (arrMensajes[i].Texto);
	}
	return null;
}

function textoPorDefecto(index, idioma)
{
	if (idioma==null)
		idioma = LNG_POR_DEFECTO;
	for (var i=0;i<arrMensajes.length;i++)
	{
		if (arrMensajes[i].Idioma == idioma)
			if (arrMensajes[i].Mensaje == index)
				return (arrMensajes[i].PorDefecto);
	}
	return null;
}

function obtenerTipo(index)
{
	for (var i=0;i<arrTipos.length;i++)
	{
		if (arrTipos[i].Mensaje == index)
			return (arrTipos[i].Tipo);
	}
	return null;
}

/*	Los tipos de mensajes son/The types of messages are:
		0.- Alert -> muestra una ventana de mensaje normal con un botón aceptar
		1.- Confirm -> muestra una ventana de confirmación que tiene 2 botones (OK y CANCEL)
		2.- Prompt -> muestra una ventana de petición de un parámetro con 2 botones (OK y CANCEL)
*/
function presentarMensaje(strTexto, intTipo, strValorDefecto)
{
	switch (intTipo)
	{
	case 1:return confirm(strTexto);
			 break;
	case 2:return prompt(strTexto, strValorDefecto);
			 break;
	default: alert(strTexto);
	}
	return true;
}

function mensaje(index, idioma)
{
	var strMensaje = obtenerMensaje(index, idioma);
	if (strMensaje == null) return false;
	var strPorDefecto = textoPorDefecto(index, idioma);
	var tipo = obtenerTipo(index, idioma);
	if (tipo==null)
		tipo=TIPO_POR_DEFECTO;
	return presentarMensaje(strMensaje, tipo, strPorDefecto);
}
