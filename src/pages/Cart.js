import React from 'react';
import { useSelector } from 'react-redux';
import ProductsCard from './../components/ProductCard';

const Cart = () => {
  const cart = useSelector(state=>state.cart)
  return (
    <div>
      {
      cart.map((product)=><ProductsCard key={product._id} product={product}/>)
      }
    </div>
  );
};

export default Cart;