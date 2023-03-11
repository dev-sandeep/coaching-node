import "./App.css";
import { NavbarTop } from "./components/NavbarTop";
import { NavbarAdmin } from "./components/NavbarAdmin";
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
import Yourmenu from "./pages/Yourmenu";
import Addproduct from "./pages/Addproduct";
import Currentorder from "./pages/Currentorder";
import PreviousOrders from "./pages/PreviousOrders";

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
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/address" element={<Address />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/yourmenu" element={<Yourmenu />} />
        <Route path="/addproduct" element={<Addproduct/>} />
        <Route path="/previousorder" element={<PreviousOrders/>}/>
        <Route path="/currentorder" element={<Currentorder/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
