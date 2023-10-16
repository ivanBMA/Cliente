//https://www.freecodecamp.org/espanol/news/arreglos-de-objetos-en-javascript-actualizar/
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes

class equipo{
     constructor(nombre, puntos, partidosJugados, ganados, perdidos, empatados, golesFabor, golesContra){
        this.nombre = nombre;
        this.puntos = puntos;

        this.partidosJugados = partidosJugados;
        this.ganados = ganados;

        this.perdidos = perdidos;
        this.empatados = empatados;
        
        this.golesFabor = golesFabor;
        this.golesContra = golesContra;

     }

     toString(){
        return "nombre " +   nombre +  " puntos " +   puntos +  " partidosJugados " +   partidosJugados
        +  " ganados " +   ganados +  " perdidos " +   perdidos +  " empatados " +   empatados
        +  " golesFabor " +   golesFabor +  " golesContra " +   golesContra;
     }
}

var equipos = [];

for (let index = 0; index < 10; index++) {
    var nombre = prompt("nombre: ");
    var puntos  = prompt("puntos: ");
    var partidosJugados  = prompt("partidosJugados: ");

    var ganados  = prompt("ganados: ");
    var perdidos  = prompt("perdidos: ");
    var empatados  = prompt("empatados: "); 

    var golesFabor  = prompt("golesFabor: ");
    var golesContra  = prompt("golesContra: ");


    var unidadEquipo = new equipo(nombre, puntos, partidosJugados
        , ganados, perdidos, empatados, golesFabor, golesContra);
        //alert(unidadEquipo.toString());
        equipos.push(unidadEquipo);
}

var contador = 1;
for (let index = 0; index < equipos.length; index++) {
    alert("equipo :" + contador + " " + equipos[index].toString());
    contador ++;
}

