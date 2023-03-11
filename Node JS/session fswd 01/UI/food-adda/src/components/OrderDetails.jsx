import React from "react";
import Card from "react-bootstrap/Card";
//getting dummy data from import
import { dummyOrders } from "./dummyData";

function OrderDetails() {
  return (
    <div>
      <h1>Orders</h1>

      <div className=" justify-content-center row ">
        <div className=" d-flex justify-content-center">
          <div className="col-11 col-md-6 pt-5">
            {dummyOrders.map((item) => {
              return (
                <Card className="hover">
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
