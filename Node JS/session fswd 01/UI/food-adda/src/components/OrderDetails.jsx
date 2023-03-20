import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import { getCall } from "../Utils/api";

function OrderDetails() {
  //session token
  const sessionToken = useSelector((state) => state.user);
  const [ordersList, setOrdersList] = useState([]);
  //getting the orders list from orders document
  const orderListReq = async () => {
    getCall({
      headers: {
        token: sessionToken.token,
      },
      body: {},
      url: "http://127.0.0.1:5002/get_orders",
    }).then((resp) => {
      setOrdersList(resp.data.data);
    });
  };
  let totalArray;
  if (ordersList[0] !== undefined) {
    totalArray = ordersList.map((item, i) => {
      return item.items
        .map((itemx, j) => {
          return itemx.qty * item.itemList[j].price;
        })
        .reduce((accumulator, currentValue) => accumulator + currentValue);
    });
  }

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
                          {item.items.map((item, j) => {
                            return `${ordersList[i].itemList[j].name} x ${item.qty} `;
                          })}
                        </Card.Subtitle>

                        <Card.Text>${totalArray[i]}</Card.Text>
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
