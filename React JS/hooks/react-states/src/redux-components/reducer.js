const initialState = {
    message: '',
    products: []
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "SET_MESSAGE": {
            return {
                ...state,
                message: action.value
            }
        }
        case "GET_MESSAGE": {
            return state.message
        }
        case "LOAD_ITEMS": {
            return {
                ...state,
                value: action.value
            }
        }
        case "GET_MESSAGE": {
            return state.message
        }
        default: {
            return state;
        }
    }
}