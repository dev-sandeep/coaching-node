import "./App.css";
import { NavbarTop } from "./components/NavbarTop";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ProductDetail } from "./pages/ProductDetail";
import { Footer } from "./components/Footer";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart";
import Address from "./pages/Address";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";

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
