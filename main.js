// Declaracion de variables:
const precioEntrada = 500;

let nombre, pelicula, asientos, formaDePago;

//Funciones:
function valor(a, b) {
	document.write("Cantidad de entradas: " + b + ". Valor total: $" + a * b);
}

function comprarEntradas() {
	let nombre = prompt("Ingrese su nombre:");

	if (nombre === "") {
		alert("Debe ingresar un nombre para continuar con la compra.");
		return;
	} // return interrumpe la ejecucion

	document.write("Hola " + nombre + ". <br>Detalle de tu compra: ");

	pelicula = prompt("Selecciona la pelicula: Jurassic Park | Rocky | titanic");
    if (pelicula == "jurassic park"){
	    document.write("<br>La pelicula seleccionada es: " + pelicula + ". <br>");
    } else if (pelicula == "rocky"){
        document.write("<br>La pelicula seleccionada es: " + pelicula + ". <br>");
    } else if (pelicula == "titanic"){
        document.write("<br>La pelicula seleccionada es: " + pelicula + ". <br>");
    } else {
        alert("¡Comando Incorrecto!");
        return;
    }

	asientos = Number(prompt("Cantidad de asientos: (valor: $500 c/u)"));
	valor(precioEntrada, asientos);
};

function seleccionarAlimento() {
    var itemsDisponibles = ["Pochoclos", "Chocolate", "Gaseosa", "Agua"];
    var carrito = [];

    var i = 0;
    while (i < itemsDisponibles.length) {
    var seleccion = confirm("¿Deseas agregar a la reserva " + itemsDisponibles[i] + " para acompañar la pelicula?");

    if (seleccion) {
        carrito.push(itemsDisponibles[i]);
    }

    i++;
}

document.write("<br>Reserva: <br>" + carrito + ". (Podes abonar y retirar por el candy hasta 5 min antes de la pelicula).");

};

// Ejecucion
comprarEntradas();
seleccionarAlimento();