import React, { useState, useEffect } from 'react';
import { getData } from '../../Api/FetchData';

const FreshVegetables = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData('/products?category=Fruits%20%26%20Vegetables')
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Fresh Vegetables</h1>

      {products.map((product) => (
        <div key={product._id}>
          <img src={product.image} alt={product.name} width="150px" />
          <span>id: {product._id}</span>
          <span>name: {product.name}</span>
          <span>brand: {product.brand}</span>
          <span>price: ₹{product.price}</span>
        </div>
      ))}

    </div>
  );
};

export default FreshVegetables;