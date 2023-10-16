//https://elcodigoascii.com.ar/
function name(dniComprobar) {
    var resultado = false;
    var number;
    var contador = 0;

    for (let index = 0; index < dniComprobar.length; index++) {
        if (dniComprobar[index] >= 0 && dniComprobar[index] <= 9) {
            contador++;
            
        }else{
        }
        
    }

    if (dniComprobar.length == 9) {
        if (contador == 8) {
            if (dniComprobar.charCodeAt(8) >= 64 && dniComprobar.charCodeAt(8) <= 91) {
                resultado = true;
            }else{
                alert("Mal la letra " + dniComprobar.substring(8) + " tiene que ser en mayusculas");
            }
        }else{
            alert("Mal los numeros por que tiene " + contador + " numeros y son 8");
        }
    }else{
        alert("Mal la longitud " + dniComprobar.length + " " + dniComprobar);
    }

    return resultado;
}

var dni;




do {
    dni = prompt();
    //dni = "62948715L";

} while (name(dni) != true);

alert(("El nombre : " + dni + " es valido"));