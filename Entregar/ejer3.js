var nombre = prompt("Nombre: ");
var edad = prompt("edad: ");
var etiqueta;

if (edad <= 12) {
    etiqueta = "niño";
}if(edad >=13 && edad <= 17) {
    etiqueta = "adolescente"; 
} if(edad >=18 && edad <= 64) {
    etiqueta = "trabajador";
}if(edad >= 65) {
    etiqueta = "jubilado"; 
}

console.log(nombre + " tiene " + edad + " años y por lo tanto es " + etiqueta);