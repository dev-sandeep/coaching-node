import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Row } from "react-bootstrap";
import { QuantitySelector } from "../components/QuantitySelector";
import { Slider } from "../components/Slider";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Actions/cart";

export const ProductDetail = () => {
  //redux store
  const quantity = useSelector((state) => state.quantity);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //params
  const { id } = useParams();
  // State variables
  const [images, setImages] = useState([]);
  const [currImg, setCurrImg] = useState("");
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      resHandler();
    });
  }, []);

  const resHandler = async () => {
    const res = await axios.get(`http://127.0.0.1:5002/item/${id}`);
    setProductDetails(res.data.data.details[0]);
    setImages(res.data.data.details[0].images);
    setCurrImg(res.data.data.details[0].images[0]);
  };

  if (productDetails === undefined) {
    return <div>Loading...</div>;
  }

  //button functions

  function handleAddToCart() {
    console.log("add");
    dispatch(
      addToCart({
        id: productDetails.id,
        name: productDetails.name,
        price: productDetails.price,
        qty: quantity,
        img: currImg[0],
      })
    );
    console.log(cart);
  }

  return (
    <div id="productDetail-container">
      <Slider />
      <Container className="h-100 py-5 px-0">
        {/* Product Detail Page */}
        <Row xs={1} sm={1} md={2} lg={2} className="h-100 w-100 py-5 px-2 mx-0">
          <Col className="">
            <div className="ratio ratio-1x1 w-100">
              <img
                className="w-100 h-100"
                src={currImg}
                alt={productDetails.name}
              />
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
                  onClick={() => setCurrImg(image[0])}
                >
                  <img
                    className="w-100 h-100"
                    src={image}
                    alt={productDetails.name}
                  />
                </div>
              ))}
            </div>
          </Col>
          <Col>
            <div>
              <h1 className="fw-bold mt-5">{productDetails.name}</h1>
              <p className="fs-3">${productDetails.price}</p>
              <p>{productDetails.desc}</p>
              <h3 className="mt-5">About Chef</h3>
              <Row className="flex-column-reverse flex-sm-row">
                <Col sm={10}>
                  <big className="fw-semibold">
                    {productDetails.chef_details &&
                      productDetails.chef_details[0].name}
                  </big>
                  <br />
                  <small className="text-muted">Restaurant</small>
                  <p className="">
                    {productDetails.chef_details &&
                      productDetails.chef_details[0].desc}
                  </p>
                </Col>
                <Col
                  sm={2}
                  className="align-items-center justify-content-center"
                >
                  <img
                    src=""
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
                  onClick={handleAddToCart}
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
