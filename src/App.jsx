import { useState } from "react";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>

      <p>Bring Nature Into Your Home</p>

      <button
        onClick={() => setShowProductList(true)}
      >
        Get Started
      </button>

      <AboutUs />
    </div>
  );
}

export default App;
