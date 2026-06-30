import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function LandingPage() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>

      <p>Bring Nature Into Your Home</p>

      <Link to="/plants">
        <button>Get Started</button>
      </Link>

      <AboutUs />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;