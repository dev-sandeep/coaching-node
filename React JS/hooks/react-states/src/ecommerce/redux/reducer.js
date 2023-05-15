const initState = {
    cart: [],
    products: [],
    showLoader: false
}

export const reducer = (store = initState, action)=>{
    switch(action.type){
        case "ADD_TO_CART":{
            return {
                ...store,
                cart: [...store.cart, action.value]
            }
        }
        case "LOAD_PRODUCTS":{
            return {
                ...store,
                products: action.value
            }
        }
        default:{
            return store;
        }
    }
}