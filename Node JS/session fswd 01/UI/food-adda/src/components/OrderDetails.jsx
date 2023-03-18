import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import moment from "moment/moment";
//getting dummy data from import
import { dummyOrders } from "./dummyData";

function OrderDetails() {
  const [ordersList, setOrdersList] = useState([]);
  const orderListReq = async () => {
    try {
      const response = axios
        .get("http://127.0.0.1:5002/get_orders", {
          headers: { token: "somerandomtext" },
        })
        .then((response) => {
          setOrdersList(response.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    orderListReq();
  }, []);
  return (
    <div>
      {ordersList !== undefined ? (
        <div>
          <h1>Orders</h1>

          <div className=" justify-content-center row ">
            <div className=" d-flex justify-content-center">
              <div className="col-11 col-md-6 pt-5">
                {ordersList.map((item, i) => {
                  return (
                    <Card className="hover">
                      <Card.Body>
                        <div className="d-flex justify-content-between ">
                          <Card.Title>{`Order - ${i + 1}`}</Card.Title>
                          <p>{moment(item.ts).fromNow()}</p>
                        </div>
                        <Card.Subtitle className="  mb-2 p-2">
                          {item.items.map((item) => {
                            return `${item.itemId} x ${item.qty} `;
                          })}
                        </Card.Subtitle>

                        <Card.Text>${item.items[i].itemId}</Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading Orders List...</div>
      )}
    </div>
  );
}

export default OrderDetails;
