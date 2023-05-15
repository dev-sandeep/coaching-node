import React from 'react';
import { useSelector } from 'react-redux';

export const NavBar = ()=>{
    const selector = useSelector(state=>state);
    console.log(selector);

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item d-flex">
                            <a class="nav-link" href="#">Cart({selector.cart.length})</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}