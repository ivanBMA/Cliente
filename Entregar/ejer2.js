/*
Crea un programa que pida a un usuario dos números y si quieres sumarlos o concatenarlos. Saca 
el resultado por consola de lo que se le haya pedido.
*/

var num1 = prompt("Numero uno");
var num2 = prompt("Numero dos");

//var concatenar =  confirm(" quieres sumarlos = aceptar o concatenarlos = cancelar");
var concatenar = prompt("sumar");
//Sumar 
if (concatenar == "si") {
    console.log(num1 + " + " + num2 + "=" +  (Number(num1) + Number(num2)));
}//Concatenar
else{
    console.log(num1 + " + " + num2 + "=" +  (num1 + num2));
}