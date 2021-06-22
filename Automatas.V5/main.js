var id = []; var idu = []; var idd = [];
var afdo = []; var afdou = []; var afdod = [];
var cantidad = []; var cantidadu = []; var cantidadd = [];
var inicio = []; var iniciou = []; var iniciod = [];

var estados = []; var estadosu = []; var estadosd = [];
var varA = []; var varAu = []; var varAd = [];
var varB = []; var varBu = []; var varBd = [];
var final = []; var finalu = []; var finald = [];

var sa; var sb;

var auto1 = []; var auto2 = [];

var arrfinalu = [];

function separar(){ //IGNORAR SIGO TRABAJANDO AQUI
    var vara = document.getElementById("varA").value;
    console.log(vara);
    var varb = document.getElementById("varB").value;
    console.log(varb);
    sa = vara.split(';');
    sb = varb.split(';');
    console.log("Cantidad de variables: " + sa.length);
    console.log("Cantidad de variables: " + sb.length);

   for (var i=0; i < sa.length; i++) {
      console.log("A:" + sa[i]);
   }
   for (var i=0; i < sb.length; i++) {
      console.log("B:" + sb[i]);
   }
}

function automata(){
    var aux = document.getElementById("cantest").value;
    var auxu = document.getElementById("inicio").value;
    
    if(aux >= 0 && auxu >= 0 && (aux % 1 === 0) && (auxu % 1 === 0) && (auxu <= aux)){
        var id = afdo.length;
        afdo[id] = document.getElementById("afdon").value;
        console.log(afdo);    
        cantidad[id] = document.getElementById("cantest").value;
        console.log(cantidad);
        inicio[id] = document.getElementById("inicio").value;
        console.log(inicio);
    }
    else{
        let insertarTerminal = document.querySelector(".terminal");
        let adv = `ERROR: Los datos NO PUDIERON ser agregados<br>`;
        insertarTerminal.innerHTML += adv;
            if(aux < 0){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: La cantidad de estados debe ser POSITIVA el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(auxu < 0){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El estado inicial debe ser POSITIVO el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(aux % 1 !== 0){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: La cantidad de estados debe ser un número ENTERO el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(auxu % 1 !== 0){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El estado inicial debe ser un número ENTERO el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(auxu > aux){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El estado inicial debe ser MENOR que la cantidad de estados el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
    }
}

function datos(){

    var auxe = document.getElementById("estado").value;
    var auxa = document.getElementById("varA").value;
    separar();
    //parseInt(auxa);
    var auxb = document.getElementById("varB").value;
    parseInt(auxb);
    var auxc = cantidad;

    if(auxe >= 0 && auxa >= -1 && auxb >= -1 && (auxe % 1 === 0) && (auxa % 1 === 0) && (auxb % 1 === 0) && (auxe <= auxc) && (auxa <= auxc) && (auxb <= auxc)){
        var aux = estados.length;

        estados[aux] = document.getElementById("estado").value;
        console.log(estados);
        varA[aux] = document.getElementById("varA").value;
        parseInt(varA[aux]);
        console.log(varA);
        varB[aux] = document.getElementById("varB").value;
        parseInt(varB[aux]);
        console.log(varB);
        final[aux] = document.getElementById("final").value;
        console.log(final);
    }else{
        let insertarTerminal = document.querySelector(".terminal");
        let adv = `ERROR: Los datos NO PUDIERON ser agregados<br>`;
        insertarTerminal.innerHTML += adv;
            if(auxe < 0){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El estado debe ser POSITIVO el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(auxa < -1){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El valor en A debe ser MAYOR O IGUAL A -1 el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(auxb < -1){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El valor en B debe ser MAYOR O IGUAL A -1 el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(auxe % 1 !== 0){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El estado debe ser un número ENTERO el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(auxa % 1 !== 0){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El valor en A debe ser un número ENTERO el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(auxb % 1 !== 0){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El valor en B debe ser un número ENTERO el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(auxe > auxc){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El estado debe ser un número MENOR A LA CANTIDAD DE ESTADOS el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(auxa > auxc){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El valor en A debe ser un número MENOR A LA CANTIDAD DE ESTADOS el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(auxb > auxc){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El valor en B debe ser un número MENOR A LA CANTIDAD DE ESTADOS el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
    }
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

function arreglofinalesu(){ //COPIAR PARA FINALES 2 no tengo como probarlo bien
    //EN TEORIA DEBERIA CREAR UN ARREGLO DE LOS ESTADOS FINALES
    var auxlar = finalu.length;
    var larg = arrfinalu.length;
    for(var i = 0; i<auxlar ;i++){
        if(finalu[i] === 1){
            larg = arrfinalu.length;
            arrfinalu[larg] = estadosu[i];
        }
    }
}

function main(){
//estados = arreglo
//varA = arreglo -1 si no existe la variable
//varB = arreglo -1 si no existe la variable
//final = arreglo de 0 y 1 /0 si /1 no
    
        datos();

}
