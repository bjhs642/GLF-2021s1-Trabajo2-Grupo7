//Signos: > <

/** RECIBIENDO DATOS **/
//Datos
let AFND = [
  {estado: 0, a: 0, b: [0,1]},
  {estado: 1, a: 2, b: 2},
  {estado: 2, a: null, b: null}
];
//Valores
let valores = ["a", "b"];
//Estados No Aceptadores (Nodos) | CONJUNTOS
let estadosNoAceptadores = [0,1];
//Estados Aceptadores (Finales) | CONJUNTOS
let estadosAceptadores = [2];

//
/** BUSCAR LOS ESTADOS QUE NO COINCIDEN EN ESTADO FINAL **/
let tabla = [];

//Funcion compara arreglos - importa su orden
const getResult = function (a1, a2) {
   var i = a1.length;
   if (i !== a2.length) return false;

   while (i--) {
     if (a1[i] !== a2[i]) return false;
   }
  return true;
};

function busqueda (estado){
  console.log("ENTRE A: busqueda");
  let e;
  for (let i = 0; i < AFND.length; i ++){
    e = AFND[i].estado.toString();
    if (e.includes(estado) === true){
      return AFND[i];
    }
  }

  return -1;//Estado no encontrado
}

function busquedaAyB (estado){
  console.log("ENTRE A: busquedaAyB");
  //Guarda las direcciones
  let A, B;
  //Variables de apoyo
  let extraer, encontrado;
  //Arreglos
  let temporalA = [], temporalB = [], cambioA, cambioB;

  console.log("ESTADO ingresado para su búsqueda: ", estado);//[0,1]  ---- 2 | null
  if (busqueda(estado) === -1){
    if (estado === null){
      estado = AFND.length;
    }
  }

  console.log("Largo del Estado: ", estado.length);
  if (estado.length !== undefined){
    for (let i = 0; i < estado.length; i ++){
      extraer = estado[i];//estado: 0  ... 1 | 
      encontrado = busqueda(extraer); //{estado: 0, a: [0,1], b: 2}
      console.log("El estado: ", estado[i]," y sus direcciones: ", encontrado);
      A = encontrado.a; // [0,1]  ... 0 | null
      B = encontrado.b; // 2  ... 1 | [0,1]

      //Ingresar direcciones "a" y "b"
      if (A !== null){
        console.log("Largo de A: ", A.length);
        if (A.length === undefined){
          temporalA.push(A); //
        } else {
          //concadenar con el arreglo nuevo
          temporalA = temporalA.concat(A); // [0,1]
        }
      }

      if(B !== null){
        console.log("Largo de B: ", B.length);
        if (B.length === undefined){
          temporalB.push(B); // 2
        } else {
          temporalB = temporalB.concat(B); //
        }
      }
    }
    //Eliminar elementos repetidos en "a" y "b"   
    cambioA = new Set(temporalA);
    cambioB = new Set(temporalB);
    cambioA = [...cambioA].sort();
    cambioB = [...cambioB].sort();
    console.log("Dirección A: ", cambioA, " para el Estado: ", estado);
    console.log("Dirección B: ", cambioB, " para el Estado: ", estado);
  } else {//null
    encontrado = busqueda(estado);//estado: 2, a: null , b: [0,1]
    console.log("El estado: ", estado," y sus direcciones: ", encontrado);
    A = encontrado.a; // null 
    B = encontrado.b; // [0,1]

    //Ingresar direcciones "a" y "b"
    if (A !== null){// null != null
      if (A.length === undefined){
        temporalA.push(A); 
      } else {
        //concadenar con el arreglo nuevo
        temporalA = temporalA.concat(A); // []
      }
    }

    if(B !== null){ //[0,1] != null
      if (B.length === undefined){// 2 == undefined
        temporalB.push(B);
      } else {
        temporalB = temporalB.concat(B); //[0,1]
      }
    }

    //Eliminar elementos repetidos en "a" y "b"   
    cambioA = new Set(temporalA); //{}
    cambioB = new Set(temporalB); //{0,1}
    cambioA = [...cambioA];//[]
    cambioB = [...cambioB];//[0,1]
    console.log("Dirección A: ", cambioA, " para el Estado: ", estado);
    console.log("Dirección B: ", cambioB, " para el Estado: ", estado);
  }

  //Pregunto
  /*
     -> estadoFinal: 0,           a: 0,           b: [ 0, 1 ]
        estadoFinal: [ 0, 1 ],    a: [ 0, 2 ],    b: [ 0, 1, 2 ]
     o  estadoFinal: [ 0, 2 ],    a: [ 0, 2 ],    b: [ 0, 1, 2 ]
  */
  //Ingrese a la tabla
  console.log("Termine de encontrar direcciones del estado...");
  if (cambioA.length !== 0 && cambioB.length !== 0){
    if (cambioA.length !== 1 && cambioB.length !== 1){
      console.log("PUSH... 3.3");
      tabla.push({estadoFinal: estado, a: cambioA, b: cambioB});
    }

    else if (cambioA.length === 1 && cambioB.length === 1){
      console.log("PUSH... 3.3");
      tabla.push({estadoFinal: estado, a: cambioA.pop(), b: cambioB.pop()});
    }

    else if (cambioA.length === 1){
      console.log("PUSH... 3.1");
      tabla.push({estadoFinal: estado, a: cambioA.pop(), b: cambioB});
    }

    else if (cambioB.length === 1){
      console.log("PUSH... 3.2");
      tabla.push({estadoFinal: estado, a: cambioA, b: cambioB.pop()});
    }
    console.log("Tabla actual: ", tabla);
  }

  else if (cambioA.length === 0 && cambioB.length === 0){
    console.log("PUSH... 0");
    tabla.push({estadoFinal: estado, a: estado, b: estado});
    console.log("Tabla actual: ", tabla);
  }

  else if (cambioA.length === 0 && cambioB.length !== 0){//**** */
    console.log("PUSH... 1");
    tabla.push({estadoFinal: estado, a: estado, b: cambioB});
    console.log("Tabla actual: ", tabla);
  }

  else if (cambioB.length === 0 && cambioA.length !== 0){//*** */
    console.log("PUSH... 2");
    tabla.push({estadoFinal: estado, a: cambioA, b: estado});
    console.log("Tabla actual: ", tabla);
  }
}

function esEstadoFinal(estado){
  console.log("ENTRE A: esEstadoFinal");
  console.log("Largo tabla: ", tabla.length);
  let tab;

  for (let i = 0; i < Object.keys(tabla).length; i++){
    tab = tabla[i].estadoFinal;

    if (estado === null){
      estado = AFND.length;
    }
    console.log ("Es ", tab, " igual a ", estado, "?");

    console.log("LARGO ESTADO: ", estado.length);
    console.log("Y ES: ", estado.length === undefined);

    if (estado.length !== undefined){//arreglo
    console.log("Op 1 es: ", getResult(tab, estado));
      if (getResult(tab, estado)){
        return true;
        break;
      }
    } else {//En caso de no ser estado arreglo
      console.log("Variable: ", tab);
      console.log("Op 2 es: ", tab === estado);
      if (tab === estado){
        return true;
        break;
      }
    }
  }
  return false;
}

function AFN (){
  let e, a, b;
  e = AFND[0].estado;//0 -> 0
  a = AFND[0].a;//[0,1] -> 1
  b = AFND[0].b;//2 -> null
  tabla.push({estadoFinal: e, a: a, b: b});
  console.log("Largo de tabla ANTES: ", tabla.length);

  for (let k = 0; k < Object.keys(tabla).length; k++){// 0, 1
    console.log("Valor de k EMPEZADO EL PROCESO: ", k);
    console.log("Se encuentra la direccion A en estado final?, ", esEstadoFinal(tabla[k].a));
    if (esEstadoFinal(tabla[k].a) === false){ // 1
      console.log("Buscando lado A...");
      busquedaAyB(tabla[k].a);
      console.log("Termine mi proceso en ", tabla[k].a);
    }

    console.log("Se encuentra la direccion B en estado final?, ", esEstadoFinal(tabla[k].b));
    if (esEstadoFinal(tabla[k].b) === false){//null
      console.log("Buscando lado B...");
      busquedaAyB(tabla[k].b);
      console.log("Termine mi proceso en ", tabla[k].b);
    }
    console.log("Valor de k: ", k);
    console.log("...Largo de tabla DENTRO: ", tabla.length);
  }
  console.log("... termine mi proceso.");
}

AFN();
console.log(tabla);
