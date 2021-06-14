import React, { Fragment, useState } from 'react';
import AddAutomata from './components/AddAutomata';
import Tabla from './components/Tabla';
import EditAutomata from './components/EditAutomata';



function App() {

  const automatasData = [

  ]

  const [automatas, setAutomatas] = useState(automatasData);

  const add = automata =>{
    automata.id = automatas.length + 1
    if(automata.id > 2){
      alert("SOLO PUEDE TENER 2 AUTOMATAS")
    }
    //HAY QUE AGREGAR LAS OTRAS RESTRICCIONES DE DATOS
    else{
      setAutomatas([...automatas, automata])
    }
  }
    
  //A VECES FALLA AL ELIMINAR EL AUTOMATA 1
  const deleteAutomatas = id =>{
    setAutomatas(automatas.filter(automata => automata.id !== id))
  }

  const deleteAll = () => {
    setAutomatas('')
  }

  const [editing, setEditing] = useState(false);

  const [currentAutomata, setCurrentAutomata] = useState({
    id: null,
    afdon: null,
    estados: null,
    alfabeto: null,
    inicio: null,
    final: null,
    cantalfa: null
  });

  const editRow = (automata) => {
    setEditing(true);
    setCurrentAutomata({
      id: automata.id,
      afdon: automata.afdon,
      estados: automata.estados,
      alfabeto: automata.alfabeto,
      inicio: automata.inicio,
      final: automata.final,
      cantalfa: automata.cantalfa
    })
  }

  const updateAutomata = (id, updateAutomata) => {
    setEditing(false)

    setAutomatas(automatas.map(automata => (automata.id === id ? updateAutomata : automata)))
  }

  //AÑADIR FUNCION PARA AÑADIR OTRO ESTADO FINAL
  const insertFinal = (automata) => {
    alert("test insertar final")
  }

  //AÑADIR FUNCION PARA LLENAR TABLA DE DATOS
  const insertDatos = (automata) => {
    alert("test insertar datos")
  }

  return (
    <Fragment>  
      <div className="container"> 
        <table width="100%" border="0" align="center">
        <thead>
          <tr>
            <td width="100%" height="56" align="center">
              <h1>TRABAJO 2: AFD Y AFND</h1>
            </td>
          </tr>

          <tr>
            <td align="center">
              <div className="container" widht="100%">
                <h2>AUTOMATAS</h2>
                <hr></hr>
              </div>
            </td>
          </tr>

          <tr>
            <td valign="top" bgcolor="#CCCCCC" height="100" border="1">
              <div className="container" >
                    <h3>INSTRUCCIONES</h3>
                    <h5>1.JDJDJDJDJDJD</h5>
                    <p>bla bla bla</p>
                    <h5>2.FGFGFGFGFG</h5>
                    <p>bla bla bla</p>
               </div>
             </td>
            </tr>

            <tr>
              <td widht="100%" height="200">
                <div className="container">
                <hr></hr>
                  {
                    editing ? (
                      <div>
                        <EditAutomata currentAutomata={currentAutomata} updateAutomata={updateAutomata} />
                      </div>
                    ) : (
                      <div>
                        <AddAutomata add={add} />
                      </div>
                    )
                  }
                </div>
              </td>
            </tr>

  <tr>
    <td height="100%">
      <Tabla automatas={automatas} deleteAutomatas={deleteAutomatas} deleteAll={deleteAll} editRow={editRow} insertDatos={insertDatos} insertFinal={insertFinal} />

    </td>
  </tr>
  </thead>
</table>
</div>

    </Fragment>   
  );
}

export default App;
