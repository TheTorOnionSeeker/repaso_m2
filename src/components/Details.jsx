import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import { getPost } from '../redux/actions/actions';

export function Details(props){
    let params=props.match.params.id;
    //let paramsHooks=React.useParams();
    //let dispatch=useDispatch();// accedo a store.dispatch()
    // En lugar de usar mapStateToProps:
    //let details=useSelector(state=>state.details);// equivalente a props.details
    //let users=useSelector(state=>state.users);// equivalente a props.users

    React.useEffect(()=>{
        // ni bien cargue la página
        // va a la api, trae info
        // y la carga en details
        props.getDetail(params)
    }, [] );

    return(
        <>
            El usuario número {params}
            {
                props.details ? (<div>
                    {props.details.id}
                    {props.details.title}
                    {props.details.body}
                </div>) : null
            }
        </>
    )
}

function mapStateToProps(state){
    return{
        users:state.users,
        details:state.details
    }
}

function mapDispatchToProps(dispatch){
    return {
        getDetail: id=>dispatch(getPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)