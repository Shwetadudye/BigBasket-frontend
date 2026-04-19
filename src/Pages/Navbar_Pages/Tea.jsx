import React, { useEffect, useState } from 'react';
import { getData } from '../../Api/FetchData';
import ProductCard from '../../Components/ProductCard';

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

      <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',gap:'20px'}}>
        {products.map((product) => (
          <ProductCard  key ={product._id} item={product}/>
        ))}
      </div>

    </div>
  );
};

export default Tea;