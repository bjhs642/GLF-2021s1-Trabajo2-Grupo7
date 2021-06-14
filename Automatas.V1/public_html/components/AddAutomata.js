import React, {Fragment} from 'react';

import {useForm} from 'react-hook-form'

const AddAutomata = (props) => {

    const {register, handleSubmit} = useForm();

    //const [Datos, setDatos] = useState()


    const onSubmit = (data, e) => {
        
        props.add(data)
        e.target.reset();
    }

    return (
        <Fragment>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label>
                        ¿Es AFD o AFND? : 
                    </label>
                    <select name="afdon" size="1" id="afdon"
                    {...register("afdon")}>
                    <option value="0">AFD</option>
                    <option value="1">AFND</option>

                    </select>

                    <hr></hr>

                    <label>
                        Cantidad de Estados
                    </label>
                    <input
                        {...register("estados")}
                        className="form-control my-2"
                        type="number"
                        min="0"
                        placeholder="Ingrese Cantidad de Estados"
                    ></input>

                    <hr></hr>

                    <label>
                        Estado Inicial
                    </label>
                    <input
                        {...register("inicio")}
                        className="form-control my-2"
                        type="number"
                        min="0"
                        placeholder="Ingrese Estado inicial"
                    ></input>

                    <hr></hr>

                    <label>
                    Estado Final
                    </label>
                    <input
                    {...register("final")}
                    className="form-control my-2"
                    type="number"
                    min="0"
                    placeholder="Ingrese Estado final"
                            
                    ></input>
                    
                    <hr></hr>

                    <label>
                        Formato Alfabeto : 
                    </label>
                    <select name="alfabeto" size="1" id="afdo"
                    {...register("alfabeto")}>
                    <option value="0">a,b,c</option>
                    <option value="1">1,2,3</option>
                    </select>

                    <hr></hr>

                    <label>
                        Cantidad Alfabeto
                    </label>
                    <input
                        {...register("cantalfa")}
                        className="form-control my-2"
                        type="number"
                        min="0"
                        placeholder="Ingrese Cantidad Alfabeto"
                        
                    ></input>

                    <hr></hr>
                    
                    <button className="btn btn-primary">Guardar Automata</button>

                    <hr></hr>

                </form>



            </div>
        </Fragment>


    );

}

export default AddAutomata;
