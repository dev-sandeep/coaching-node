import './App.css';
import { NavbarTop } from './components/NavbarTop';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ProductDetail } from './pages/ProductDetail';
import { Footer } from './components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <NavbarTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
