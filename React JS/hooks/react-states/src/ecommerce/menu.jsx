import React from 'react';
import { useDispatch } from 'react-redux';
import { loadProducts } from './redux/actions';


export const Menu = ()=>{
    const categories = ["electronics","jewelery","men's clothing","women's clothing"];
    const dispatch = useDispatch();
    
    //load appropriate products based on selected category
    const onClickHandler = async (category)=>{
        const respData = await loadApi(category);
        dispatch(loadProducts(respData));
    }

    const loadApi = async (category)=>{
        const url = `https://fakestoreapi.com/products/category/${category}`;
        const resp = await fetch(url);
        return resp.json();
    }
    return (
        <>
            <div class="container">
                <div className="btn-group">
                    {categories.map(category=>(
                        <button type="button" onClick={()=>onClickHandler(category)} className="btn btn-sm btn-outline-secondary">{category}</button>
                    ))}
                </div>
            </div>
        </>
    );
}