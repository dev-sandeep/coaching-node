const session_key = "session";

export const setSession = ({type, token})=>{
    localStorage.setItem(session_key, JSON.stringify({
        type,//user type 1 - Customer, 2 - admin
        token
    }));
}

export const getSession = ()=>{
    let sessionData = localStorage.getItem(session_key);
    if(typeof sessionData === 'string'){
         sessionData = JSON.parse(sessionData);
        return sessionData;
    }   
    return false;
}