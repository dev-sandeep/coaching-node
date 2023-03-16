import React, { useEffect } from "react";

{
  /* hemant -previousorder*/
}

const PreviousOrders = () => {
  useEffect(() => {
    const orderItems = document.querySelectorAll(".order-item");
    orderItems.forEach((item) => {
      item.addEventListener("click", () => {
        orderItems.forEach((item) => {
          item.classList.remove("selected");
        });
        item.classList.add("selected");
      });
    });
  }, []);

  return (
    <div className="orders-section">
      <h2 className="mb-5">Orders</h2>
      <ul id="order-list">
        <li className="order-item">
          <span className="order-number">Order 01</span>
          <span className="order-detail">
            Dum biryani x 1, Aloo paratha x 3, Dahi x2
          </span>
          <span className="order-total">Total : $99</span>
          <span className="order-time">3 days ago</span>
        </li>
        <li className="order-item">
          <span className="order-number">Order 02</span>
          <span className="order-detail">
            Dum biryani x 1, Aloo paratha x 3, Dahi x2
          </span>
          <span className="order-total">Total : $99</span>
          <span className="order-time">3 days ago</span>
        </li>
        <li className="order-item">
          <span className="order-number">Order 03</span>
          <span className="order-detail">
            Dum biryani x 1, Aloo paratha x 3, Dahi x2
          </span>
          <span className="order-total">Total : $99</span>
          <span className="order-time">3 days ago</span>
        </li>
      </ul>
      <h3 className="earnings">
        Total Earnings: <span>$198</span>
      </h3>
    </div>
  );
};

export default PreviousOrders;
