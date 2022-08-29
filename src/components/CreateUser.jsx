import React from 'react';
import {useState} from 'react';

export default function CreateUser(){
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

    let handleSubmit=(e)=>{
        e.preventDefault();
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