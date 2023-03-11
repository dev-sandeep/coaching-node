import "./App.css";
import { NavbarTop } from "./components/NavbarTop";
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

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/address" element={<Address />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
