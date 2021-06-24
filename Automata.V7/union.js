//compara arreglos
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
  
  let tablaTransformacion = [];
  let tablaFinales = [];
  
  //EN CASO DE: ser un AFND transformado AFD
  function transformacion(afd, tablaAceptadores, tablaS) {
    //Paso 1: Re etiquetar y crear tabla
    tablaAceptadoresCopia= JSON.parse(JSON.stringify(tablaAceptadores));
    tablaTransformacion = JSON.parse(JSON.stringify(afd));
  
    for (let c = 0; c < tablaTransformacion.length; c++) {//Renombrar estados
      tablaTransformacion[c].estado = c;
    }
  
    for (let i = 0; i < afd.length; i++) {
      let s = 0;
      while (s < afd.length) {
        if (tablaTransformacion[i].a == afd[s].estado || getResult(tablaTransformacion[i].a, afd[s].estado )) {
          if (busquedaAceptadores(tablaAceptadoresCopia, tablaTransformacion[i].a) == true){
            tablaFinales.push(s);
          }
          tablaTransformacion[i].a = s;
        }
  
        if (tablaTransformacion[i].b == afd[s].estado || getResult(tablaTransformacion[i].b, afd[s].estado )) {
          if (busquedaAceptadores(tablaAceptadoresCopia, tablaTransformacion[i].b) == true){
            tablaFinales.push(s);
          }
          tablaTransformacion[i].b = s;
        }
  
        s++;
      }
    }
  
    console.log("T F: ", tablaFinales);
    console.log("T: ", tablaTransformacion);
    return tablaTransformacion;
  }
  
  function unirEstados (afd1, afd2, tablaUnion){
    let combi = [];
    
    for (let i = 0; i < afd1.length; i++){//2
      for (let j = afd1.length; j < tablaUnion.length; j++){//4
        //console.log("[0]: ", afd1[i]);
        //console.log("[1]: ", afd2[j]);
        combi.push([tablaUnion[i].estado, tablaUnion[j].estado]);
      }
    }
    //console.log("combi: ", combi);
    return combi;
  }
  
  function busqueda (estado, tablaABuscar){
    console.log("ENTRE A: busqueda");
    let e;
    for (let i = 0; i < tablaABuscar.length; i ++){
      e = tablaABuscar[i].estado.toString();
      if (e.includes(estado) == true){
        return tablaABuscar[i];
      }
    }
  
    return -1;//Estado no encontrado
  }
  
  //Paso semi final
  function busquedaDeEstados (estado, tablaUnion, unionDeEstados){
    console.log("ENTRE A: busquedaAyB");
    //Guarda las direcciones
    let A, B;
    //Variables de apoyo
    let extraer, encontrado;
    //Arreglos
    let temporalA = [], temporalB = [];
  
    console.log("ESTADO ingresado para su búsqueda: ", estado);//[0,2]
  
    console.log("Largo del Estado: ", estado.length);
    if (estado.length != undefined){
      for (let i = 0; i < estado.length; i ++){
        extraer = estado[i];//estado: 0  ... 2  
        encontrado = busqueda(extraer, tablaUnion); //{estado: 0, a: 1, b: 0}
        console.log("El estado: ", estado[i]," y sus direcciones: ", encontrado);
        A = encontrado.a; // 1
        B = encontrado.b; // 0
  
        //Ingresar direcciones "a" y "b"
        if (A != null){
            temporalA.push(A); // 1
        }
  
        if(B != null){
            temporalB.push(B); // 0
        }
      }
  
    }
  
    //Ingrese a la tabla
    console.log("Termine de encontrar direcciones del estado...");
    unionDeEstados.push({estado: estado, a: temporalA, b: temporalB});
  }
  
  //UNA VEZ: reenombrado los AFNDtoAFD... Se procede a juntar ambos afd's
  function combinar (afd1, afd2, tablaAceptador1, tablaAceptador2) {
    let tablaUnion = [];
    //Insertando el primer afd
    for (let i = 0; i < afd1.length; i++){
      tablaUnion.push(afd1[i]);
    }
    console.log("Tabla union 1: ", tablaUnion);
  
    //Insertar y reenombrado de 2do afd
    let m = [];
    let x = [];
    m = JSON.parse(JSON.stringify(afd2));
    console.log("m: ", m);
    let index = tablaUnion.length;
    let j = index;
    for (let c = 0; c < m.length; c++) {//Renombrar estados
      m[c].estado = j;
      j++;
    }
  
    console.log("m: ", m);
  
    let estados = [];
    for (let i = 0; i < m.length; i++){
      estados.push(m[i].estado);
    }
  
    console.log("Estados: ", estados);
    let final = [];
    final = JSON.parse(JSON.stringify(m));
  
    for (let i = 0; i < m.length; i++) {
      let s = 0;
      while (s < afd2.length) {
        console.log("s: ", s);
        console.log("m a: ", m[i].a);
        console.log("afd2 e: ", afd2[s].estado);
        console.log("Es vdd? ", m[i].a == afd2[s].estado);
        if (m[i].a == afd2[s].estado) {
          console.log("num: ", estados[s]);
          final[i].a = estados[s];
        }
  
        console.log("s: ", s);      
        console.log("m b: ", m[i].b);
        console.log("afd2 e: ", afd2[s].estado);
        console.log("Es vdd? ", m[i].b == afd2[s].estado);
  
        if (m[i].b == afd2[s].estado) {
          console.log("num: ", estados[s]);
          final[i].b = estados[s];
        }
  
        s++;
      }
    }
  
    //Revisando estados Finales
    let guardoMomento = [];
    for (let r = 0; r < tablaAceptador2.length; r++){
      for (let f = 0; f < estados.length; f++){
        if (tablaAceptador2[r] == f){
          guardoMomento.push(estados[f]);
        }
      }
    }
  
    console.log("Finales 222222222222: ", guardoMomento);
    guardoMomento = guardoMomento.concat(tablaAceptador1);
    guardoMomento.sort();
    console.log("Finales 222222222222: ", guardoMomento);
  
    for (let k = 0; k < final.length; k++){
      tablaUnion.push(final[k]);
    }
  
    console.log("Tabla union: ");
    console.log(tablaUnion);
  
    let estadosNuevos = unirEstados(afd1, afd2, tablaUnion);
    console.log("Estados nuevos: ", estadosNuevos);
  
    //----------------
    let unionDeEstados = [];
    for (let i = 0; i < estadosNuevos.length; i ++){
      busquedaDeEstados(estadosNuevos[i], tablaUnion, unionDeEstados);
    }
  
    tablaFinales = guardoMomento;
    console.log("FIN?: ", unionDeEstados);
    return unionDeEstados;
  }
  
  function auxiliar(esta){// 0 - 4
    for (let k = 0; k < tablaFinales.length; k++){
      if (esta == tablaFinales[k]){ //4 = 1, 4, 5?
        return true;
      }
    }
  
    return false;
  }
  
  function union (unionDeEstados){
    for (let i = 0; i < unionDeEstados.length; i++){
      let aux = unionDeEstados[i].estado;
      if (i == 0){
        console.log("-> ", unionDeEstados[i]);
      } else {
        // 1, 4, 5
        if (auxiliar(aux[0]) == true || auxiliar(aux[1]) == true){
          console.log("* ", unionDeEstados[i]);
        } else {
        console.log(" ", unionDeEstados[i]);
        }
      }  
    }
  }
  
  
function controladora(adf, adf2) {
    /*AUTOMATA NUMERO 1*/
    let AFD1 = adf;

  
  
    /*AUTOMATA NUMERO 2*/
    //Recibe un AFND convertido a AFD
    var AFD2 = adf2;
  
  
    let aux = transformacion(AFD2, estadosAceptadores2, estadosNoAceptadores2);
    estadosAceptadores2 = new Set(tablaFinales);
    estadosAceptadores2 = [...estadosAceptadores2];
    console.log("Acep: ", estadosAceptadores2);
    let unionT = combinar(AFD1, aux, estadosAceptadores1, estadosAceptadores2);
    union(unionT);
    return unionT;
  }