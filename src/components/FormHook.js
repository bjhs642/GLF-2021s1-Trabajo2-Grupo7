import React, {Fragment, useState} from 'react';

import {useForm} from 'react-hook-form'

const FormHook = () => {

    const {register, handleSubmit} = useForm();

    const [Datos, setDatos] = useState([])


    const onSubmit = (data) => {
        console.log(data)
        setDatos([
            ...Datos,
            data
        ])
    }

    return (
        <Fragment>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        ¿Es AFD o AFND? : 
                    </label>
                    <select name="afdo" size="1" id="afdo"
                    {...register("afdo")}>
                    <option value="0">AFD</option>
                    <option value="1">AFND</option>

                    </select>

                    <hr></hr>

                    <label>
                        Cantidad de Estados 
                    </label>
                    <input
                        {...register("cantidad")}
                        className="form-control my-2"
                        type="number"
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
                        placeholder="Ingrese Estado inicial"
                    ></input>

                    <hr></hr>

                    <label>
                        Cantidad Estados Finales
                    </label>
                    <input
                        {...register("cantfinal")}
                        className="form-control my-2"
                        type="number"
                        placeholder="Ingrese Cantidad de Estados finales"
                        
                    ></input>

                    <hr></hr>

                    <label>
                    Estado Final
                    </label>
                    <input
                    {...register("final")}
                    className="form-control my-2"
                    type="number"
                    placeholder="Ingrese Estado final"
                            
                    ></input>
                    
                    <hr></hr>

                    <label>
                        Formato Alfabeto : 
                    </label>
                    <select name="alfa" size="1" id="afdo"
                    {...register("alfa")}>
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
                        placeholder="Ingrese Cantidad Alfabeto"
                        
                    ></input>

                    <hr></hr>
                    
                    <button className="btn btn-primary">Enviar Datos</button>

                    <hr></hr>
                    

                </form>


                <ul>
                    {
                        Datos.map(item => 
                            <Fragment>
                                
                            </Fragment>
                        )
                    }
                </ul>

            </div>
        </Fragment>


    );

}

export default FormHook;