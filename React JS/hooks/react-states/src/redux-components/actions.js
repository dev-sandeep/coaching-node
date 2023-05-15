export const setMessage = (msg)=>{
    return {
        type: 'SET_MESSAGE',
        value: msg
    }
}

export const getMessage = ()=>{
    return {
        type: 'GET_MESSAGE'
    }
}

export const loadItems = (data)=>{
    return {
        type: 'LOAD_ITEMS',
        value: data
    }
}