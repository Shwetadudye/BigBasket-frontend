import React from "react";
import '../CSS/ProductCard.css'

const ProductCard = ({ item }) => {
  
  const discount = Math.round(
    ((item.price - item.discountPrice) / item.price) * 100
  );

  return (
    <div className="card">
      
      <span className="badge">{discount}% OFF</span>

      <img src={item.image} alt={item.name} className="productImg" />

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

      
      <button className="addBtn">Add</button>
    </div>
  );
};

export default ProductCard;