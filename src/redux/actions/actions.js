const CREATE_USER='CREATE_USER';

export function createUser(info){
    return {
        type:CREATE_USER,
        payload:info
    }
}