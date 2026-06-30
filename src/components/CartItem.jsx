import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/CartSlice";

import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.cartItems
  );

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <h2>Total Amount: ${totalAmount}</h2>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img
            src={`https://picsum.photos/100?random=${item.id}`}
            alt={item.name}
          />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>
            Total Cost: $
            {item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch(decrementQuantity(item.id))
            }
          >
            -
          </button>

          <span> {item.quantity} </span>

          <button
            onClick={() =>
              dispatch(incrementQuantity(item.id))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>

      <button
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>
    </div>
  );
}

export default CartItem;