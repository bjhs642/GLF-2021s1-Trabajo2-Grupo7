/** FUNCIONALIDADES **/
/** --------------- **/
/* Metodo Myhill-Nerode  */
let semiMatriz = [];
let AFD = [];
let estadosAceptadores = [];

//Creación de tabla 2 dimensiones
for (let i = 0; i < AFD.length; i ++){
  let arreglo = [];
  for (let j = 0; j < AFD.length; j ++){
    arreglo.push(".");
  }
  semiMatriz.push(arreglo);
}

//Verifica si el Estado es Estado Aceptado
function esEstadoFinal(afd){
  for (let i = 0; i < estadosAceptadores.length; i ++){
    if (afd == estadosAceptadores[i]){
      return true;
    }
  }

  return false;
}

//Paso 1: Seleccione los Estados distingibles
//      |0  1  2  3  4  5   j
//    --|-----------------  
//i:  0 |.  X  X        X   -> j: 1, 2, 3, 4, 5
//    1 |.  .     X  X      -> j: 2, 3, 4, 5
//    2 |.  .  .  X  X      -> j: 3, 4, 5
//    3 |.  .  .  .     X   -> j: 4, 5
//    4 |.  .  .  .  .  X   -> j: 5
//    5 |.  .  .  .  .  .
// Se marcan Estados no equivalente, por ejemplo: 
//                                       Estado 0 pertence a E No Acep
//                                                   !=
//                                       Estado 1 pertence a E Acep
//                          *Por lo tanto marqué con: X 

function distingibles(){
  for (let i = 0; i < AFD.length; i ++){
    for (let j = i+1; j < AFD.length; j++){
      if (esEstadoFinal(AFD[i].estado) != esEstadoFinal(AFD[j].estado)){
        semiMatriz[i][j] = 'X';
      } else {
      semiMatriz[i][j] = '0'; //Vacio, se reemplaza por 0
      }
    }
  }
}

distingibles();
console.log(semiMatriz);

//Paso 2: Ejecutar el paso 1 hasta que no existan coincidencias
//      |0  1  2  3  4  5   j
//    --|-----------------  
//i:  0 |.  X  X  0  0  X   -> j: 1, 2, 3, 4, 5
//    1 |.  .  0  X  X  Y   -> j: 2, 3, 4, 5
//    2 |.  .  .  X  X  Y   -> j: 3, 4, 5
//    3 |.  .  .  .  0  X   -> j: 4, 5
//    4 |.  .  .  .  .  X   -> j: 5
//    5 |.  .  .  .  .  .

//      |0  1  2  3  4  5   j
//    --|-----------------  
//i:  0 |.  X  X  T  T  X   -> j: 1, 2, 3, 4, 5
//    1 |.  .  0  X  X  Y   -> j: 2, 3, 4, 5
//    2 |.  .  .  X  X  Y   -> j: 3, 4, 5
//    3 |.  .  .  .  0  X   -> j: 4, 5
//    4 |.  .  .  .  .  X   -> j: 5
//    5 |.  .  .  .  .  .

let existeMarca = true;

function distingiblesNuevos(){
  let siExisteMarca = 0;
  while (existeMarca == true){
    siExisteMarca = 0;
    for (let i = 0; i < semiMatriz.length; i ++){
      for (let j = i+1; j < semiMatriz.length; j ++){
        if (semiMatriz[i][j] == '0'){
          //Si no hay "0", ni "." entonces quiere decir que esta marcado
          if (semiMatriz[AFD[i].a][AFD[j].a] == 'X' || semiMatriz[AFD[i].b][AFD[j].b] == 'X'){
            semiMatriz[i][j] = 'X';
            console.log("Entreeeeee");
            siExisteMarca++;
          }
        }
      }
    }

    if (siExisteMarca == 0){
      existeMarca = false;
    }
  }
}

distingiblesNuevos();
console.log(semiMatriz);

//Paso 3: Identificar los estados colapsantes en la semiMatriz / indistingibles
//
//      |0  1  2  3  4  5  
//    --|-----------------  
//    0 |.  X  X  T  T  X   
//    1 |.  .  0  X  X  Y   
//    2 |.  .  .  X  X  Y  
//    3 |.  .  .  .  0  X  
//    4 |.  .  .  .  .  X  
//    5 |.  .  .  .  .  .
//      
//    Existe '0' en: [1][2]  y [3][4]
//    Una los estados, por ej.: 2 ahora se encuentra en 1
//   MINIMIZACIÓN DEL PROBLEMA...
//        ->estado: 0      a: 1-2   b: 1-2
//         *estado: 1-2    a: 3-4   b: 3-4
//          estado: 3-4    a: 5     b: 5
//         *estado: 5      a: 5     b: 5

let ADFMinimizado = [];
let colapsados = [];
let colapsantes = [];
let estados = [];
function encontrado(estado){
  for (let i = 0; i < colapsados.length; i ++){
    if (colapsados[i] != 0)
        if (i == estado){
          return colapsados[i];
        }
  }
  return false;
}

function minimizar(){
  for (let i = 0; i < AFD.length; i ++){
    colapsados.push([]);
  }
  //Identificando vacios para colapsar
  for (let i = 0; i < semiMatriz.length; i ++){
    for (let j = i+1; j < semiMatriz.length; j ++){
      if (semiMatriz[i][j] == '0'){
        colapsados[i].push(j);
        //Comprobar si esta en el arreglo colapsantes
        if ((colapsantes.find(elemento => elemento == i)) == i){
          //No haga nada
        } else {
          colapsantes.push(i);
        }
        if ((colapsantes.find(elemento => elemento == j)) == j){
          //No haga nada
        } else {
          colapsantes.push(j);
        }
      }
    }
  }
  //console.log(colapsados);
  //console.log(colapsantes);

  for (let i = 0; i < AFD.length; i ++){
    if ((colapsantes.find(elemento => elemento == AFD[i].estado)) == i){
      let resultado = encontrado(AFD[i].estado);
      if(resultado != false){
        let numero = i;
        for(let c = 0; c < resultado.length; c++){
          numero += resultado[c].toString();
        }
        estados.push(numero);
      }
    } else {
      estados.push(i.toString());
    }
  }

  console.log("Nuevos estados: ");
  console.log(estados);

  //Transformar en string para facilitar su busqueda por coincidencia
  for (let i = 0; i < AFD.length; i ++){
    let e = (AFD[i].estado).toString();
    let a = (AFD[i].a).toString();
    let b = (AFD[i].b).toString();
    let nuevoEstado, nuevoA, nuevoB;
    for(let k = 0; k < estados.length; k ++){
      if (estados[k].includes(e) == true){
        nuevoEstado = estados[k];
      }
      if (estados[k].includes(a) == true){
        nuevoA = estados[k];
      }
      if (estados[k].includes(b) == true){
        nuevoB = estados[k];
      }
      
    }
    
    //Evitar lineas repetidas
    let repetido = 0;
    if (ADFMinimizado.length == 0){
      ADFMinimizado.push({estado: parseInt(nuevoEstado), a: parseInt(nuevoA), b: parseInt(nuevoB)});
    } else {
      for (let s = 0; s < ADFMinimizado.length; s++){
        if (ADFMinimizado[s].estado == nuevoEstado && ADFMinimizado[s].a == nuevoA && ADFMinimizado[s].b == nuevoB){
          repetido = 1;
        }
      }
      if (repetido == 0){
        ADFMinimizado.push({estado: parseInt(nuevoEstado), a: parseInt(nuevoA), b: parseInt(nuevoB)});
      }
    }
  }
}

const getResult = function(a1, a2) {
    var i = a1.length;
    if (i != a2.length) return false;
  
    while (i--) {
      if (a1[i] !== a2[i]) return false;
    }
    return true;
  };

function busquedaAceptadores(aceptadores, es){
    for (let i = 0; i < aceptadores.length; i++){
      console.log("Aceptador: ", aceptadores[i]);
      console.log("Arreglo a comparar: ", es);
      console.log("Result: ", getResult(es, aceptadores[i]));
      if (getResult(es, aceptadores[i])){
        return true;
      }
    }
  
    return false;  
  }

/* Función controladores */
export function simplificar(AFDoriginal, estadosAceptadores) {
    AFD = JSON.parse(JSON.stringify(AFDoriginal));
    estadosAceptadores = JSON.parse(JSON.stringify(estadosAceptadores));
    minimizar();
    console.log("ADF Minimizado: ");
    console.log(ADFMinimizado);
    let estadosAceptadoresMinizados = [];
    let final;
    let tablaFinales = [];

    // 1 2 5 estado final
    // 0 12 34 5 estados
    // 12 5 estado final min
    //Estados Aceptadores actualizados  estadosAceptadores
    for (let i = 0; i < estadosAceptadores.length; i ++){
        let estadoFinal = estadosAceptadores[i].toString();//1
        for (let k = 0; k < estados.length; k ++){
            if ( estados[k].includes(estadoFinal) == true ){
            final = estados[k];
        }
    }
    
    let repetido = 0;
    if (estadosAceptadoresMinizados.length == 0){
      estadosAceptadoresMinizados.push(parseInt(final));
    } else {
      for (let s = 0; s < estadosAceptadoresMinizados.length; s++){
        if (estadosAceptadoresMinizados[s] == final){
          repetido = 1;
        }
      }
  
      if (repetido == 0){
        estadosAceptadoresMinizados.push(parseInt(final));
      }
    }
  }
  console.log("Estados Aceptadores final: ");
  console.log(estadosAceptadoresMinizados);
  let autonomaNuevo = [ADFMinimizado, estadosAceptadoresMinizados];


  //Re nombrar
  tablaAceptadoresCopia= JSON.parse(JSON.stringify(estadosAceptadores));
  ADFMinimizadoC = JSON.parse(JSON.stringify(ADFMinimizado));
  for (let c = 0; c < ADFMinimizadoC.length; c++) {//Renombrar estados
    ADFMinimizadoC[c].estado = c;
  }
  for (let i = 0; i < ADFMinimizado.length; i++) {
    let s = 0;
    while (s < ADFMinimizado.length) {
      if (ADFMinimizadoC[i].a == ADFMinimizado[s].estado || getResult(ADFMinimizadoC[i].a, ADFMinimizado[s].estado )) {
        if (busquedaAceptadores(tablaAceptadoresCopia, tablaTransformacion[i].a) == true){
          tablaFinales.push(s);
        }
        ADFMinimizadoC[i].a = s;
      }

      if (ADFMinimizadoC[i].b == ADFMinimizado[s].estado || getResult(ADFMinimizadoC[i].b, ADFMinimizado[s].estado )) {
        if (busquedaAceptadores(tablaAceptadoresCopia, ADFMinimizadoC[i].b) == true){
          tablaFinales.push(s);
        }
        ADFMinimizadoC[i].b = s;
      }

      s++;
    }
  }

  console.log("T F: ", tablaFinales);
  console.log("T: ", ADFMinimizadoC);

  autonomaNuevo = [ADFMinimizadoC, tablaFinales]; //Envia Autonoma y estados finales

  return autonomaNuevo;
}