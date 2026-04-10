import React, { useState, useEffect } from 'react';
import { getData } from '../../Api/FetchData';
import ProductCard from '../../Components/ProductCard';

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

      <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',gap:'20px'}}>
        {products.map((product) => (
          <ProductCard item={product}/>
        ))}
      </div>

    </div>
  );
};

export default FreshVegetables;