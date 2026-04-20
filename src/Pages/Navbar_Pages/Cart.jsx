import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../../Redux/CartSlicer";
import "../../CSS/Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cart);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.discountPrice * (item.qty || 1),
    0
  );

  const navigate = useNavigate();

  return (
    <div className="cartContainer">
      <h1 className="title">My Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <h2 className="empty">Your cart is empty 😢</h2>
      ) : (
        <div className="cartLayout">

          
          <div className="cartItems">
            {cartItems.map((item) => (
              <div className="cartCard" key={item._id}>

               
                <div className="imgBox">
                  <img src={item.image} alt={item.name} />
                </div>

                
                <div className="infoBox">

                  <h3 className="productName">{item.name}</h3>

                  <p className="brand">Brand: {item.brand}</p>

                  <p className="desc">
                    {item.description?.slice(0, 60)}...
                  </p>

                  <p className="weight">{item.weight}</p>

                  <p className="price">
                    ₹{item.discountPrice}
                    <span className="originalPrice">₹{item.price}</span>
                    <span className="discount">
                      {Math.round(
                        ((item.price - item.discountPrice) / item.price) * 100
                      )}% off
                    </span>
                  </p>

                  
                  <div className="qtyBox">
                    <button onClick={() => dispatch(decreaseQty(item._id))}>-</button>
                    <span>{item.qty || 1}</span>
                    <button onClick={() => dispatch(increaseQty(item._id))}>+</button>
                  </div>

                 
                  <button
                    className="removeBtn"
                    onClick={() => dispatch(removeFromCart(item._id))}
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))}
          </div>

          <div className="summaryBox">
            <h2>Price Details</h2>

            <p>Total Items: {cartItems.length}</p>

            <h3>Total: ₹{totalPrice}</h3>

            <button
              className="checkoutBtn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;