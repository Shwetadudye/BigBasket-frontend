import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../Api/FetchData";
import ProductCard from "../Components/ProductCard";

const Search = () => {
  const [params] = useSearchParams();
  const query = params.get("q");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData(`/products?q=${query}`)
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, [query]);
  
  {products.length === 0 && <h3>No products found 😢</h3>}

  return (
    <div>
      <h2>Search Results for "{query}"</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Search;