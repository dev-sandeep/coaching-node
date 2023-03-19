import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const FoodCard = (
  { data, index, product } // data is an object with properties img, title, desc
) => {
  // console.log(data);
  return (
    <Col key={index} className="mb-3">
      <Card
        className="border-0 text-decoration-none"
        as={Link}
        to={`/product/${product}`}
      >
        <Card.Img
          src={data.images[0]}
          alt=""
          className="ratio ratio-1x1 rounded-0"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            height: "300px",
          }}
        />
        <Card.Body className="m-0 px-0">
          <Card.Title className="fs-5 fw-semibold mb-0 text-dark">
            {data.name}
          </Card.Title>
          <p className="text-muted fs-6">{`$${data.price}`}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};
