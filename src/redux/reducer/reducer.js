let index=1;

const initialState={
    users:[]
}

export default function Reducer(state=initialState, action){
    switch(action.type){
        case 'CREATE_USER':
            return{
                ...state,
                users:[...state.users, {...action.payload, id:index++}]
            };
            default:
                return {...state};
    }
}