import React from 'react';
import { Menu } from './menu';
import { Product } from './product';
import { useSelector } from 'react-redux'; 

export const Home = ()=>{
    const selector = useSelector(state=>state);
    return (
        <>
            <Menu />
            <hr />
            <div className='row m-top-10'>
                {
                    selector.products.map((prod)=>(
                        <Product
                            title={prod.title}
                            description={prod.description}
                            image={prod.image}
                            price={prod.price}
                        />
                    ))
                }
            </div>
        </>
    );
}