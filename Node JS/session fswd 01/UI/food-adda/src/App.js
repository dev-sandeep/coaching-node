import "./App.css";
import { NavbarTop } from "./components/NavbarTop";
import { NavbarAdmin } from "./components/NavbarAdmin";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { ProductDetail } from "./Pages/ProductDetail";
import { Footer } from "./components/Footer";
import { ToastContainer } from "react-toastify";
import Cart from "./Pages/Cart";
import Address from "./Pages/Address";
import Checkout from "./Pages/Checkout";
import Order from "./Pages/Order";
import Yourmenu from "./Pages/Yourmenu";
import Addproduct from "./Pages/Addproduct";
import Currentorder from "./Pages/Currentorder";
import PreviousOrders from "./Pages/PreviousOrders";
import Register from "./Pages/Register";

import { Signup } from "./Pages/Signup";
import Notfound  from "./components/Notfound";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavbarTop />
      {/* Navbar for Admin User */}
      {/* <NavbarAdmin /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/address" element={<Address />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/yourmenu" element={<Yourmenu />} />
        <Route path="/addproduct" element={<Addproduct/>} />
        <Route path="/previousorder" element={<PreviousOrders/>}/>
        <Route path="/currentorder" element={<Currentorder/>}/>
        <Route path="/signup" element={<Register />}/>
        <Route path="*" element={<Notfound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
