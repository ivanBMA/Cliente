/*
let array1 = new Array();
let array2 = Array();
let array3 = [];

array1 = new Array(2);
array2 = new Array(2,3);

let edades = [12,15,16,16];
console.log(edades);
edades[0] == 11;

let precios = [12,15,16,16,15];
    for (let index = 0; index < precios.length; index++) {
        console.log(precios[index]);     
    };
//Construir un array con 5 comunidades
let comunidades = ["Aragón", "Cataluña", "Andalucia", "La rioja", "Valencia"];
    for (let index = 0; index < precios.length; index++) {
        if (index % 2 != 0) {
            console.log(comunidades[index]);     
        }
    };

    
//Doble array

let sinIva = [20,5,10];
let conIva = sinIva;
conIva[0] = 110;
console.log(sinIva);
console.log(conIva);

//Duplicar array correctamente
let sinIvaA = [20,5,10];
let conIvaA = sinIvaA.slice();
let parcial = sinIvaA.slice(1,2);

console.log(sinIvaA);
console.log(conIvaA);
console.log(parcial);


let pajar = ["a",7,true,50.50,7,"Marcos"];
let aguja = 7;
let resultado = pajar.indexOf(aguja);
let resultadoA = pajar.includes(aguja);
console.log(resultadoA);

let vector = ["casado", "casa", "a","A"]
vector.sort();
console.log(vector);

const conjunto = new Set();
var conjunto1 = new Set([34,1,"Girasol",25.9])
var conjunto2 = new Set("cadena");
console.log(conjunto1);
console.log(conjunto2);

//ejercicio 3.3
let map = new Map();
map.set(2, '2');
console.log(map);

function calcularHolas(_numero){
    for (let index = 0; index < _numero; index++) {
        console.log("Hola");   
    }
}

var numeroHolas = prompt();
console.log(calcularHolas(numeroHolas));

var mensaje = "Fuero de la funcion";
function mostrarAnuncio(){
    var mensaje = "Dentro de la funcion";
    console.log(mensaje);
}
mostrarAnuncio();
console.log(mensaje);
*/
var numero = prompt();
function numeroMasUno(_numero){
    _numero++;
    return _numero;
}
console.log(numeroMasUno(numero)); 


