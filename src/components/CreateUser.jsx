import React, {useState, useDispatch} from 'react';
//import { connect } from 'react-redux';
import {createUser} from '../redux/actions/actions';
//import {useState} from 'react';

export default function CreateUser(){
// export function CreateUser({create}) // en el caso de utilizar connect y recibir createUser
// por props
    let [input, setInput]=useState({
        name:'',
        lastName:'',
        age:'',
        city:'',
    });

    
    let handleChange=(e)=>{
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]:e.target.value
        });
        // opción 2:
        // setInput((prev)=>({...prev, [e.target.name]:e.target.value}));
    }

    let dispatch=useDispatch();

    let handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createUser(input));
        // en el caso de utilizar connect:
        // create(input);
        setInput({
            name:'',
            lastName:'',
            age:'',
            city:'',
        });
    }

    return(
        <>
            <div>CREATE USER</div>
            <br/>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>Name</label>
                    <input type={'text'} name={'name'} value={input.name}
                    onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label>Lastname</label>
                    <input type={'text'} name={'lastName'} value={input.lastName}
                    onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label>Age</label>
                    <input type={'text'} name={'age'} value={input.age}
                    onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label>City</label>
                    <input type={'text'} name={'city'} value={input.city}
                    onChange={(e)=> handleChange(e)} />
                </div>
                <br/>
                <input type={'submit'} value={'CREATE'}/>
            </form>
        </>
    )
}

/* ESTA SERÍA LA SEGUNDA OPCIÓN PARA ESTABLECER LA INFO DE INPUT EN EL ESTADO GLOBAL DE LA APP
UTILIZANDO CONNECT
EN ESTE CASO createUser SE RECIBE POR PROPS, PUDIENDO HACERSE DESTRUCTURING EN EL PARAMETRO QUE
RECIBE LA FUNCION O UTILIZANDO props EN EL PARAMETRO Y LUEGO SE ACCEDE CON props.createUser
    function mapDispatchToProps(dispatch){
        return {
            create:(input)=>dispatch(createUser(input))
        }
}

(PARA UTILIZAR connect HAY QUE IMPORTARLO DESDE 'react-redux'(import {connect} from 'react-redux'))
export default connect(null, mapDispatchToProps)(CreateUser)
// LO QUE PASA POR DETRAS:
// <CreateUser create={(input)=>dispatch(createUser(input))} />
*/