import React, { useEffect, useState } from 'react';
import { getData } from '../../Api/FetchData';

export const Tea = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData('/products?name_like=Tea&_sort=name')
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Tea Products</h1>

      {products.map((product) => (
        <div
          key={product._id}
        >
          <img src={product.image} alt={product.name} width="150px" />
          <span>id: {product._id}</span>
          <span>name: {product.name}</span>
          <span>brand: {product.brand}</span>
          <span>price: {product.price}</span>
        </div>
      ))}

    </div>
  );
};

export default Tea;