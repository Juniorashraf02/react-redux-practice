import React from "react";
import { useSelector } from "react-redux";
import ProductsCard from "./../components/ProductCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="grid grid-cols-3 gap-10">
      {cart
        .sort((a,b) => a._id-b._id)
        .map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default Cart;
