import React from "react";
import { useProducts } from "./../context/ProductProvider";
import ProductCard from "./../components/ProductCard";

export default function Home() {
  const {
    state: { product, loading, error },
  } = useProducts();
  let content;
  // console.log(product);
  if (loading) {
    return (content = <p>Loading...</p>);
  }
  if (error) {
    return (content = <p>Something went wrong!</p>);
  }
  if (!loading && !error && product.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }
  if (!loading && !error && product.length) {
    content = product.map((products) => (
      <ProductCard products={products} key={products._id} />
    ));
  }

  return <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>{content}</div>;
}
