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

function separara(){
    var vara = document.getElementById("varA").value;
    console.log(vara);
   
    sa = vara.split(';');
    console.log("Cantidad de variables: " + sa.length);
    
    for (var i=0; i < sa.length; i++) {
      console.log("A:" + sa[i]);
    }
    parseInt(sa);
    return sa;
}

function separarb(){
    var varb = document.getElementById("varB").value;
    console.log(varb);
    
    sb = varb.split(';');
    console.log("Cantidad de variables: " + sb.length);
    
    for (var i=0; i < sb.length; i++) {
      console.log("B:" + sb[i]);
    }
    parseInt(sb);
    return sb;
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
                let adv = `ERROR: La cantidad de estados debe ser un n??mero ENTERO el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(auxu % 1 !== 0){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El estado inicial debe ser un n??mero ENTERO el valor NO SERA AGREGADO<br>`;
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
    //var auxa = document.getElementById("varA").value;
    //parseInt(auxa);
    //var auxb = document.getElementById("varB").value;
    //parseInt(auxb);
    var auxc = cantidad;
    var errest = 0;
    var erra = 0;
    var errb = 0;
    var varauxa = separara();
    var varauxb = separarb();
    var auxlena = varauxa.length;
    var auxlenb = varauxb.length;

    for(var i = 0; i<auxlena; i++){
        if(sa[i] >= -1 && (sa[i] % 1 === 0) && (sa[i] <= auxc)){
            erra++;
        }}
            for(var j = 0; j<auxlenb; j++){
                if(sb[j] >= -1 && (sb[j] % 1 === 0) && (sb[j] <= auxc)){
                    errb++;
                }}
                    if(auxe >= 0 && (auxe % 1 === 0) && (auxe <= auxc)){
                        errest = 1;
                    }
                
            
    if(errest === 0){
    //ERRORES ESTADO
    let insertarTerminal = document.querySelector(".terminal");
    let adv = `ERROR: Los datos NO PUDIERON ser agregados<br>`;
    insertarTerminal.innerHTML += adv;
        if(auxe < 0){
            let insertarTerminal = document.querySelector(".terminal");
            let adv = `ERROR: El estado debe ser POSITIVO el valor NO SERA AGREGADO<br>`;
            insertarTerminal.innerHTML += adv;
        }
        if(auxe % 1 !== 0){
            let insertarTerminal = document.querySelector(".terminal");
            let adv = `ERROR: El estado debe ser un n??mero ENTERO el valor NO SERA AGREGADO<br>`;
            insertarTerminal.innerHTML += adv;
        }
        if(auxe > auxc){
            let insertarTerminal = document.querySelector(".terminal");
            let adv = `ERROR: El estado debe ser un n??mero MENOR A LA CANTIDAD DE ESTADOS el valor NO SERA AGREGADO<br>`;
            insertarTerminal.innerHTML += adv;
        }
    }
    if(errb !== auxlenb){
        //ERRORES B
        let insertarTerminal = document.querySelector(".terminal");
        let adv = `ERROR: Los datos NO PUDIERON ser agregados<br>`;
        insertarTerminal.innerHTML += adv;
        for(var j = 0; j<auxlenb; j++){
            if(sb[j] < -1){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El valor en B debe ser MAYOR O IGUAL A -1 el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(sb[j] % 1 !== 0){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El valor en B debe ser un n??mero ENTERO el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(sb[j] > auxc){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El valor en B debe ser un n??mero MENOR A LA CANTIDAD DE ESTADOS el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
        }
    }
    if(erra !== auxlena){
        //ERRORES A
        let insertarTerminal = document.querySelector(".terminal");
        let adv = `ERROR: Los datos NO PUDIERON ser agregados<br>`;
        insertarTerminal.innerHTML += adv;
        for(var i = 0; i<auxlena; i++){
            if(sa[i] < -1){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El valor en A debe ser MAYOR O IGUAL A -1 el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(sa[i] % 1 !== 0){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El valor en A debe ser un n??mero ENTERO el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
            if(sa[i] > auxc){
                let insertarTerminal = document.querySelector(".terminal");
                let adv = `ERROR: El valor en A debe ser un n??mero MENOR A LA CANTIDAD DE ESTADOS el valor NO SERA AGREGADO<br>`;
                insertarTerminal.innerHTML += adv;
            }
        }
    }

    if(erra === auxlena && errb === auxlenb && errest === 1){
        var aux = estados.length;

        estados[aux] = document.getElementById("estado").value;
        console.log(estados);
        varA[aux] = varauxa;
        console.log(varA);
        varB[aux] = varauxb;
        console.log(varB);
        final[aux] = document.getElementById("final").value;
        console.log(final);
    }
    else {
        
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
