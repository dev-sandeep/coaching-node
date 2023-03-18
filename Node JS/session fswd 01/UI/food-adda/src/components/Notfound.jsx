import React from 'react'
import '../styles/Notfound.css'
import { NavLink } from 'react-router-dom'
const Notfound = () => {
  return (
    <>
  
    <div id="particles" className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>   
    <main>
        <section>
            <h1>Page Not Found!</h1>
            <div>
                <span>4</span>
                <span className="circle">0</span>
                <span>4</span>
            </div>
            <p>We are unable to find the page<br/>you're looking for.</p>
            <div>
                <button><NavLink to="/" style={{color:"#fafafa",textDecoration:"none"}}>Back to Home Page</NavLink></button>
            </div>
        </section>
    </main>
    </>
    
  )

}

export default Notfound;