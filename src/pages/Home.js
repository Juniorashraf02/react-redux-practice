import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductsCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://productdemo.onrender.com/items")
      .then((result) => result.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return <div className="grid grid-cols-3 gap-10">
    {
      products.map(product=><ProductsCard key={product._id} product={product}></ProductsCard>)
    }
  </div>;
};

export default Home;
 