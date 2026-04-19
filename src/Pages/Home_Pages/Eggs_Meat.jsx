import React, { useState, useEffect } from 'react';
import { getData } from '../../Api/FetchData';
import ProductCard from '../../Components/ProductCard';

const Eggs_Meat = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData('/products?name_like=egg&_sort=name')
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      

      <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',gap:'20px'}}>
        {products.map((product) => (
          <ProductCard  key ={product._id} item={product}/>
        ))}
      </div>

    </div>
  );
};

export default Eggs_Meat;