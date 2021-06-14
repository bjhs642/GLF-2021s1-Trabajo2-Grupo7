import React from 'react'



const Tabla = (props) => {
    function a(){
        var x = automatas.afdon;
        if(x == "0"){
            x = "AFD";
        }
        else{
            x = "AFND";
        }
        return x;
    }
    automatas.afdon = a()

    return (
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>AFD O AFND</th>
                    <th>Estados</th>
                    <th>Alfabeto</th>
                    <th>Estado Inicial</th>
                    <th>Estado Final</th>
                    <th>Cantidad Alfabeto</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {props.automatas.length > 0 ? (
                    props.automatas.map(automatas => (
                        <tr key={automatas.id}>
                            <td>{automatas.id}</td>
                            <td>{automatas.afdon}</td>
                            <td>{automatas.estados}</td>
                            <td>{automatas.alfabeto}</td>
                            <td>{automatas.inicio}</td>
                            <td>{automatas.final}<button className="button btn btn-primary" onClick={() => {props.insertFinal(automatas)}}>Añadir</button></td>
                            <td>{automatas.cantalfa}</td>
                            <td>
                                <button 
                                className="button btn btn-primary"
                                onClick={() => {props.editRow(automatas)}}
                                >
                                    Editar
                                </button>

                                <button 
                                className="button btn btn-danger"
                                onClick={() => {props.deleteAutomatas(automatas.id)}}
                                >
                                    Eliminar
                                </button>

                                <button 
                                className="button btn btn-warning"      
                                onClick={() => {props.insertDatos(automatas)}}    
                                >
                                    Datos
                                </button>
                            </td>
                        </tr>
                    ))) : (
                    <tr>
                        <td colSpan={8}>NO HAY AUTOMATAS REGISTRADOS</td>
                    </tr>
                    )
                }
                <tr>
                    <td colSpan={8}>
                        <button 
                            className="button btn btn-danger"
                            onClick={() => {props.deleteAll()}}
                        >
                            Eliminar Todo
                        </button>
                    </td>
                </tr>
                
            </tbody>
        </table>
    );
}

export default Tabla;