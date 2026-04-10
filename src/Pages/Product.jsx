import React, { useState } from "react";

import '../CSS/Products.css'
import ProductCard from "../Components/ProductCard";

const Product = ({ title, products }) => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleProducts = products.slice(startIndex, startIndex + 4);

  const nextSlide = () => {
    if (startIndex + 4 < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="mainContainer">
      
      {/* Header */}
      <div className="header">
        <h2>{title}</h2>

        <div className="controls">
          <h2>View All</h2>
          <button className='btn1' onClick={prevSlide}>⬅</button>
          <button className='btn2' onClick={nextSlide}>➡</button>
        </div>
      </div>

      {/* Products */}
      <div className="productBox">
        {visibleProducts.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;