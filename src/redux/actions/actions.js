//const CREATE_USER='CREATE_USER';

export function createUser(info){
    return {
        type:'CREATE_USER',
        payload:info
    }
}

export function getPost(id){
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(r=>r.json())
            .then(post=>dispatch({type:'SET_DETAIL', payload:post}))
    }
}

export function deleteUser(id){
    return {
        type:'DELETE_USER',
        payload: id
    }
}