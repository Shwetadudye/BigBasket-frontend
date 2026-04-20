import React from "react";
import '../CSS/ProductCard.css';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQty, decreaseQty } from "../Redux/cartSlicer";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {

  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cart);
  const navigate = useNavigate();

  const cartItem = cart.find((el) => el._id === item._id);

  const discount = Math.round(
    ((item.price - item.discountPrice) / item.price) * 100
  );

  return (
    <div className="card">

      <span className="badge">{discount}% OFF</span>
      <img src={item.image} alt={item.name} className="productImg" onClick={()=> navigate(`/product/${item._id}`)} />
      <h6>⚡10 MINS</h6>
      <p className="brand">{item.brand}</p>
      <h4>{item.name}</h4>
      <p className="rating">⭐ {item.rating}</p>
      <p className="price">
        ₹{item.discountPrice}
        <span className="oldPrice"> ₹{item.price}</span>
      </p>
      <p className="stock">
        {item.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>
      <div className="btnContainer">

        {!cartItem ? (
          <button
            className="addBtn"
            onClick={() => dispatch(addToCart(item))}
          >
            Add
          </button>
        ) : (
          <div className="qtyBox">
            <button onClick={() => dispatch(decreaseQty(item._id))}>-</button>
            <span>{cartItem.qty}</span>
            <button onClick={() => dispatch(increaseQty(item._id))}>+</button>
          </div>
        )}

      </div>

    </div>
  );
};

export default ProductCard;