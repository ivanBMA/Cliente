/*Crea un programa que cuente el tiempo desde que se ha iniciado la página web. 
Haz que al hacer click en un botón saque el resultado por consola.*/
var contador = 0;

function Reloj(){
    contador++;
}

function Tiempo(){
    console.log("ha pasado " + contador + " segundos");
}

setInterval(Reloj, 1000);

/*
var boton = document.getElementById("boton");
boton.addEventListener("click", Tiempo());
*/

