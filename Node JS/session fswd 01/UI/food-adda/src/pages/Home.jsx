import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { FoodCard } from "../components/FoodCard";
import { Slider } from "../components/Slider";
import { getCall } from "../Utils/api";

export const Home = () => {
  const [data1, setData] = useState([]);
  //fetching data from recent api
  useEffect(() => {
    getCall({
      url: "http://127.0.0.1:5002/recent",
    }).then((resp) => {
      setData(resp.data.data.data);
    });
  }, []);

  // Array data for food items
  // const data = [
  //   {
  //     productID: 1,
  //     title: "Kaju Masala",
  //     desc: "$ 99",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_lJmvmmXm6ZY7rw13cq6aZUOq0SzITX1Cg&usqp=CAU",
  //   },
  //   {
  //     productID: 2,
  //     title: "Keema Bharay Baingan",
  //     desc: "$ 99",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2ZiV415XdfAanWSYyuuO0d0pS6oY8skVWQTYYRzntcpgAcXISs4k0ecgf3BV1dTB9OA&usqp=CAU",
  //   },
  //   {
  //     productID: 3,
  //     title: "Kobichi Bhaji ",
  //     desc: "$ 99",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjH_z8IZ1T9ZM_UsmHGYpEUhb03_t5ruFug&usqp=CAU",
  //   },
  // ];

  // Array for top rated items
  // const toprated = [
  //   {
  //     productID: 1,
  //     title: "French Fries",
  //     desc: "$ 99",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nZ79NmpSXZJ7i_nlwraQmb-KKU1rN3Ca6Q&usqp=CAU",
  //   },
  //   {
  //     productID: 2,
  //     title: "Paneer Masla",
  //     desc: "$ 99",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEIqWSzFYHvCH3TzTdPXRpAoqc3MltPdOsA&usqp=CAU",
  //   },
  //   {
  //     productID: 3,
  //     title: "Pizza",
  //     desc: "$ 99",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvRSYByjQVa3jrpxTUTPxNDBj4BJRHugIGaA&usqp=CAU",
  //   },
  // ];

  //  Array for celebrated chef items
  // const chef = [
  //   {
  //     title: "Tart",
  //     desc: "$ 99",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLYGcHFGSE8ET_9HmESwllzQBSBbLbi1Vjg&usqp=CAU",
  //   },
  //   {
  //     title: "Choclate bamboo",
  //     desc: "$ 99",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjX2DwadXVpSiBvZZYXJQYlZ22H0MpnCMmKHgDAh8FuN8pxnadTiEnczUfPvm04-3wvs&usqp=CAU",
  //   },
  //   {
  //     title: "Cup Cake",
  //     desc: "$ 99",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4-ggc57tEUzZcK7S9HLaRlqWWFHREqJTHw&usqp=CAU",
  //   },
  // ];
  return (
    <>
      <div id="home-main">
        {/* Slider goes here */}
        <Slider />
      </div>
      <Container>
        <h3 className="my-3 fw-semibold">Hand picked for you</h3>
        <Row xs={1} sm={2} lg={3} className="my-5">
          {data1.map((data, index) => {
            return <FoodCard data={data} index={index} product={data.id} />;
          })}
        </Row>
      </Container>
      <Container>
        {/* <h3 className="my-3 fw-semibold">Top Rated</h3>
        <Row xs={1} sm={2} lg={3} className="my-5">
          {toprated.map((data, index) => {
            return (
              <FoodCard data={data} index={index} product={data.productID} />
            );
          })}
        </Row> */}
      </Container>
      <Container>
        {/* <h3 className="my-3 fw-semibold">Celebrated chef</h3>
        <Row xs={1} sm={2} lg={3} className="my-5">
          {chef.map((data, index) => {
            return (
              <FoodCard data={data} index={index} product={data.productID} />
            );
          })}
        </Row> */}
      </Container>
    </>
  );
};
