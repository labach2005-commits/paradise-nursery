import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents" },
  { id: 2, name: "Jade Plant", price: 12, category: "Succulents" },
  { id: 3, name: "Echeveria", price: 8, category: "Succulents" },
  { id: 4, name: "Haworthia", price: 11, category: "Succulents" },
  { id: 5, name: "Sedum", price: 9, category: "Succulents" },
  { id: 6, name: "Agave", price: 15, category: "Succulents" },

  { id: 7, name: "Rose", price: 20, category: "Flowering" },
  { id: 8, name: "Orchid", price: 25, category: "Flowering" },
  { id: 9, name: "Lily", price: 18, category: "Flowering" },
  { id: 10, name: "Tulip", price: 16, category: "Flowering" },
  { id: 11, name: "Daisy", price: 14, category: "Flowering" },
  { id: 12, name: "Sunflower", price: 19, category: "Flowering" },

  { id: 13, name: "Snake Plant", price: 22, category: "Indoor" },
  { id: 14, name: "Money Plant", price: 17, category: "Indoor" },
  { id: 15, name: "Peace Lily", price: 21, category: "Indoor" },
  { id: 16, name: "ZZ Plant", price: 24, category: "Indoor" },
  { id: 17, name: "Spider Plant", price: 13, category: "Indoor" },
  { id: 18, name: "Rubber Plant", price: 26, category: "Indoor" },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div>
      <nav style={{ padding: "15px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>

      <h1 style={{ textAlign: "center" }}>
        Paradise Nursery
      </h1>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "15px",
            }}
          >
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const added = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <div
                    key={plant.id}
                    style={{
                      border: "1px solid #ccc",
                      padding: "10px",
                    }}
                  >
                    <img
                      src={`https://picsum.photos/200?random=${plant.id}`}
                      alt={plant.name}
                    />

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button
                      disabled={added}
                      onClick={() =>
                        dispatch(addItem(plant))
                      }
                    >
                      {added
                        ? "Added"
                        : "Add To Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;