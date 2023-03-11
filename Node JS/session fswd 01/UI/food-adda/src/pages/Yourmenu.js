import { useState } from "react"
import ProductCard from "../components/ProductCard"

export default function Yourmenu() {

  return (
        <div className="container ">
          <h3 className="text-center font-weight-bold m-3">Your Menu</h3>
          <div className="justify-content-center d-grid align-item-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
                
            </div>
        </div>
    )
}