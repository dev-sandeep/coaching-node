import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { QuantitySelector } from "../components/QuantitySelector";

export const ProductDetail = () => {
  // Array of images
  const images = [
    "https://images.unsplash.com/photo-1677414519330-b95a8ee85c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1675790944856-ef756a57dd89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1675914850327-87b816de133e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];

  // State variables
  const [currImg, setCurrImg] = useState(images[0]);

  return (
    <div id="productDetail-container">
      <Container className="h-100 py-5 px-0">
        {/* Product Detail Page */}
        <Row xs={1} sm={1} md={2} lg={2} className="h-100 w-100 py-5 px-2 mx-0">
          <Col className="">
            <div className="ratio ratio-1x1 w-100">
              <img className="w-100 h-100" src={currImg} alt="" />
            </div>

            {/* Images from array as thumbnail */}
            <div
              style={{ height: "70px" }}
              className="d-flex mt-3 overflow-hidden"
            >
              {images.map((image) => (
                <div
                  style={{ width: "70px" }}
                  id="thumbnail"
                  className="border-dark border-2 border mx-1"
                  onClick={() => setCurrImg(image)}
                >
                  <img className="w-100 h-100" src={image} alt="" />
                </div>
              ))}
            </div>
          </Col>
          <Col>
            <div>
              <h1 className="fw-bold mt-5">Product Name</h1>
              <p className="fs-3">$99</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                fuga consequatur officia pariatur fugiat maiores dolorem
                blanditiis nam ipsum illum quo eligendi quod at officiis optio
                commodi iste voluptatem repellat.
              </p>
              <h3 className="mt-5">About Chef</h3>
              <Row className="flex-column-reverse flex-sm-row">
                <Col sm={10}>
                  <big className="fw-semibold">Chef's Name</big>
                  <br />
                  <small className="text-muted">Restaurant</small>
                  <p className="">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ullam et porro distinctio obcaecati blanditiis aspernatur
                    fugit tempori...
                  </p>
                </Col>
                <Col
                  sm={2}
                  className="align-items-center justify-content-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="rounded-circle"
                    style={{ width: "100px", height: "100px" }}
                  />
                </Col>
              </Row>
              <QuantitySelector />
              {/* Add to Card and Buy Button */}
              <div className="d-flex mt-5">
                <Button
                  variant="dark"
                  className="px-5 py-2 me-3"
                  style={{ borderRadius: "0" }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outline-dark"
                  className="px-5 py-2"
                  style={{ borderRadius: "0" }}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
