import React from 'react';
import ProductsCard from '../components/ProductCard';
import { useProducts } from './../context/ProductProvider';

const TopRated = () => {
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
    return (content = <p>Nothign to show</p>);
  }
  if (!loading && !error && product.length ) {
    content = product.filter(product=>product.rating>=5).map((products) => (
      <ProductsCard products={products} key={products._id} />
    ));
  }

  return <div>{content}</div>;
}

export default TopRated;