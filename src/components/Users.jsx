import React from 'react';
import User from './User';
import { connect } from 'react-redux';
import { deleteUser } from '../redux/actions/actions';

export function Users(props){

    let handleClick=(e, id)=>{
        e.preventDefault();
        props.delete(id);
    };

    return(
        <div>
            {
                props.users && props.users.map((u) => (
                <div>
                    <User
                        key={u.id}
                        id={u.id}
                        name={u.name}
                        lastName={u.lastName}
                        age={u.age}
                        city={u.city}
                    />
                    <button onClick={(e)=>handleClick(e, u.id)} >ELIMINAR</button>
                <br/>
                <br/>
                </div>))
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        users:state.users
    };
}

function mapDispatchToProps(dispatch){
    return {
        delete: id=>dispatch(deleteUser(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)