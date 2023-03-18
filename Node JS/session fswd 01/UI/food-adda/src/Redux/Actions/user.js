import { LOGIN, LOGOUT } from "./../actionTypes";

const logInAction = ({type, token})=>{
    return {
        type: LOGIN,
        payload: {
            type,
            token
        }
    }
}

const logOutAction = ()=>{
    return {
        type: LOGOUT,
        payload: {
            type: -1,
            token: ''
        }
    }
}

export { logInAction, logOutAction };
