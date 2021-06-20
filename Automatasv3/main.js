var id = []; var idu = []; var idd = [];
var afdo = []; var afdou = []; var afdod = [];
var cantidad = []; var cantidadu = []; var cantidadd = [];
var inicio = []; var iniciou = []; var iniciod = [];

var estados = []; var estadosu = []; var estadosd = [];
var varA = []; var varAu = []; var varAd = [];
var varB = []; var varBu = []; var varBd = [];
var final = []; var finalu = []; var finald = [];

var auto1 = []; var auto2 = [];

function automata(){
    var id = afdo.length;
    afdo[id] = document.getElementById("afdon").value;
    console.log(afdo);    
    cantidad[id] = document.getElementById("cantest").value;
    console.log(cantidad);
    inicio[id] = document.getElementById("inicio").value;
    console.log(inicio);

}

function datos(){
    var aux = estados.length;

    estados[aux] = document.getElementById("estado").value;
    console.log(estados);
    varA[aux] = document.getElementById("varA").value;
    console.log(varA);
    varB[aux] = document.getElementById("varB").value;
    console.log(varB);
    final[aux] = document.getElementById("final").value;
    console.log(final);
}

function finauto1(){ //DATOS TERMINADOS EN U SON AUTOMATA UNO
    idu = id;
    afdou = afdo;
    cantidadu = cantidad;
    iniciou = inicio;

    estadosu = estados;
    varAu = varA;
    varBu = varB;
    finalu = final;
    
    auto1 = [{afdou, cantidadu, iniciou, estadosu, varAu, varBu, finalu}];
    
    console.log(idu);
    console.log(afdou);
    console.log(cantidadu);
    console.log(iniciou);

    console.log(estadosu);
    console.log(varAu);
    console.log(varBu);
    console.log(finalu);
    
    console.log(auto1);

    id = [];
    afdo = [];
    cantidad = [];
    inicio = [];

    estados = [];
    varA = [];
    varB = [];
    final = [];
}


function finauto2(){ //DATOS TERMINADOS EN D SON AUTOMATA DOS
    idd = id;
    afdod = afdo;
    cantidadd = cantidad;
    iniciod = inicio;

    estadosd = estados;
    varAd = varA;
    varBd = varB;
    finald = final;
    
    auto2 = [{afdod, cantidadd, iniciod, estadosd, varAd, varBd, finald}];

    console.log(idd);
    console.log(afdod);
    console.log(cantidadd);
    console.log(iniciod);

    console.log(estadosd);
    console.log(varAd);
    console.log(varBd);
    console.log(finald);
    
    console.log(auto2);

    id = [];
    afdo = [];
    cantidad = [];
    inicio = [];

    estados = [];
    varA = [];
    varB = [];
    final = [];
}

function main(){
//estados = arreglo
//varA = arreglo -1 si no existe la variable
//varB = arreglo -1 si no existe la variable
//final = arreglo de 0 y 1 /0 si /1 no

    let insertarTerminal = document.querySelector(".terminal");
    let adv = `Hola`;
    insertarTerminal.innerHTML += adv;
    datos();

}