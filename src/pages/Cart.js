import React from 'react';
import { useProducts } from './../context/ProductProvider';
import ProductsCard from './../components/ProductCard';


const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useProducts();
  let content;
  // console.log(product);
  if (loading) {
    return (content = <p>Loading...</p>);
  }
  if (error) {
    return (content = <p>Something went wrong!</p>);
  }
  if (!loading && !error && cart.length === 0) {
    content = <p>Nothing to show, cart list is empty</p>;
  }
  if (!loading && !error && cart.length) {
    content = cart.map((products) => (
      <ProductsCard products={products} key={products._id} />
    ));
  }

  return <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>{content}</div>;
}

export default Cart;