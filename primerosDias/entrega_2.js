/*
document.write("<p>El acceso a la rutaC://usuario/tarda 1'23,algo considerado 'lento' en la actualidad</p>");
$valorA = 4;
var valorB = "66";
document.write($valorA + ' + ' + valorB + ' = ' + $valorA + Number(valorB) + "<br>");

let mensaje = "¿Estas seguro de querer eliminar?";
let respuesta = confirm(mensaje);
console.log(`Respuesta del cuadro de dialogo: ${respuesta}`);

let mensajeA = "Para eliminar escriba ELIMINAR";
let respuestaA = prompt(mensajeA);
console.log(`El usuario escribio: ${respuestaA}`);


let primero = segundo = 1;
buclePrincipal: while(true){
    console.log(`(Bucle 1) Iteracion ${primero}`);
    primero++;
    while(true){
        console.log(`(Bucle 2) Iteracion ${segundo}`);
        segundo++;
        if (segundo == 5) {
            break;
        }else if(primero == 3 ){
            break buclePrincipal;
        }
    }
}
*/

//10 primero multiplos de 3 por consola
function numeros3(){
    let contador = 0;
    for (let index = 0; index < 99; index++) {
        if (contador == 10) {
            break;
        }
        if(index % 3 == 0 && index % 5 !=0){
            console.log(index);
            contador++;
        }
        
    }
}
