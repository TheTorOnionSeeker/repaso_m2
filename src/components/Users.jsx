import React from 'react';
import User from './User';
import { connect } from 'react-redux';

export function Users({users}){
    return(
        <div>
            {
                users && users.map(u => <div>
                    <User key={u.id} id={u.id} name={u.name} lastName={u.lastName} age={u.age} city={u.city} />
                </div>)
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        users:state.users
    }
}

export default connect(mapStateToProps,null)(Users)