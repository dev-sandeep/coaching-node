import React, { useRef } from "react";
import Card from "react-bootstrap/Card";

function OrderDetails() {
  const dummyValue = [
    {
      order: "Order 1",
      day: "3 days ago",
      item: "Dum Biryani X1,Aloo paratha x3,dahi x2,allen Mclen, 10 Bl Line,KA",
      price: 199,
    },
    {
      order: "Order 2",
      day: "2 days ago",
      item: "Dum Biryani X1,Aloo paratha x3,dahi x2,allen Mclen, 10 Bl Line,KA",
      price: 111,
    },
    {
      order: "Order 3",
      day: "1 days ago",
      item: "Dum Biryani X1,Aloo paratha x3,dahi x2,allen Mclen, 10 Bl Line,KA",
      price: 200,
    },
  ];
  

  return (
    <div>
      <h1>Orders</h1>

      <div className=" justify-content-center row ">
        <div className=" d-flex justify-content-center">
          <div className="col-11 col-md-6 pt-5">
            {dummyValue.map((item)=>{
                return(
                    <Card  className="hover">

                    <Card.Body>
                      <div className="d-flex justify-content-between ">
                        <Card.Title>{item.order}</Card.Title>
                        <p>{item.day}</p>
                      </div>
                      <Card.Subtitle className="  mb-2 p-2">
                       {item.item}
                      </Card.Subtitle>
      
                      <Card.Text>${item.price}</Card.Text>
                    </Card.Body>
                  </Card>

                )
            })}
           
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default OrderDetails;

