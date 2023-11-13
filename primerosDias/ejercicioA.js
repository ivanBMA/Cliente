$valorA = 4;
var valorB = "66";
document.write($valorA + ' + ' + valorB + ' = ' + $valorA + Number(valorB) + "<br>");
var base = 2;
var altura = 3;
document.write("el area de nuestro triangulo es: ${base*altura/2}");
$texto = prompt("Escribe algo.");


for (let i = 0; i < 5; i++) {
    document.write("<p class='jaba'>El numero "+ i + " + " 
        + $valorA + " = " + (i + $valorA) + ".</p><hr>");   
}

switch ($texto) {
    case "ivan":
        document.write("<a>hola usuario ivan</a>");

        break;

    default:
        document.write("<h1>hola usuario nuevo " + $texto + "</h1>");
        break;
}