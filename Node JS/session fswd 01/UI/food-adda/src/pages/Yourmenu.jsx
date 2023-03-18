import React, { useState } from "react"
import ProductCard from "../components/ProductCard"
import env_vars from "./../Utils/constants";
import { getCall } from "./../Utils/api";
import { getSession } from "./../Utils/session";

export default function Yourmenu() {
  const session = getSession();
  React.useEffect(()=>{
    const url = env_vars.base_url+env_vars.apis.admin_products
    //api call to get all the available items
    getCall({
      headers: {
        token: session.token
      },
      body: {},
      url
    }).then((resp)=>{
      console.log(resp);
    })
  }, [])
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