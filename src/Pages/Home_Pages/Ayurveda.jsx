import React, { useState, useEffect, useContext } from 'react';
import { getData } from '../../Api/FetchData';
import { AuthValContext } from '../../Context/AuthProvider';

const Ayurveda = () => {
  const [products, setProducts] = useState([]);
  const {loading , setLoading ,error , setError} = useContext(AuthValContext);

  useEffect(() => {
    getData('/products?category=Beauty%20%26%20Hygine&_sort=name')
      .then((res) => {
        setError(false);
        setLoading(true);
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if(loading){
    return <h1>load</h1>
  }

  if(error){
    return <h1>Something went wrong</h1>
  }

  return (
    <div>
      <h1>Ayurveda</h1>

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

export default Ayurveda;