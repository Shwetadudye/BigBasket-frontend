import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../Api/FetchData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQty, decreaseQty} from "../Redux/cartSlicer";
import '../CSS/ProductDetail.css'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((store)=> store.cart.cart)

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await getData(`/products?_id=${id}`);
      console.log("API:", res);

      if (res.length > 0) {
        setProduct(res[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();
}, [id]);

  if (!product) return <h2>Loading...</h2>;

  const cartItem = cart.find((el)=>el._id === product._id)

 return (
    <div className="singleContainer">

      <div className="imageBox">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="detailsBox">

        <h1>{product.name}</h1>
        <h3>{product.brand}</h3>

        <p className="rating">⭐ {product.rating}</p>

        <h2 className="price">
          ₹{product.discountPrice}
          <span> ₹{product.price}</span>
        </h2>

        <p className="category">Category: {product.category}</p>

        <p className="stock">
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        <div className="btnContainer">

          {!cartItem ? (
            <button
              className="addBtn"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          ) : (
            <div className="qtyBox">
              <button onClick={() => dispatch(decreaseQty(product._id))}>-</button>
              <span>{cartItem.qty}</span>
              <button onClick={() => dispatch(increaseQty(product._id))}>+</button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;