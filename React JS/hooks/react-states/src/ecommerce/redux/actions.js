export const addToCart = (value)=>{
    return {
        type: 'ADD_TO_CART',
        value
    }
}

export const loadProducts = (value)=>{
    return {
        type: 'LOAD_PRODUCTS',
        value
    }
}
