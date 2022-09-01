let index=1;

const initialState={
    users:[],
    details:{}
}

export default function Reducer(state=initialState, action){
    switch(action.type){
        case 'CREATE_USER':
            return{
                ...state,
                users:[...state.users, {...action.payload, id:index++}]
            };
        case 'SET_DETAIL':
            return{
                ...state,
                details: action.payload
            }
        case 'DELETE_USER':
            return{
                ...state,
                users: state.users.filter(u=>u.id!==action.payload)
            }
        default: return {...state};
    }
}