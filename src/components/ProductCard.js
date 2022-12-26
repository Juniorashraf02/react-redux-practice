import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
} from "./../redux/reducer/actionCreators/productAction";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div className=" w-full">
      <div className="shadow-lg rounded-3xl border flex flex-col p-3  text-indigo-900 relative">
        {pathname.includes("cart") && <div className="absolute top-0 right-0 bg-red-400 rounded-xl py-3 px-5 text-white bold">{product.quantity}</div>}
        <div className="h-52 w-52 mx-auto">
          <img src={product.image} alt={product.model} />
        </div>
        <h1 className="font-bold text-center">{product.model}</h1>
        <p className="text-center font-semibold mb-3">
          Rating: {product.rating}
        </p>
        <div className=" flex-1">
          <ul className="space-y-2">
            {product.keyFeature.map((feature) => {
              return (
                <li className="text-sm " key={feature}>
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-2 mt-5">
          {!pathname.includes("cart") && (
            <button
              className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
          )}
          {pathname.includes("cart") && (
            <button
              className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
              onClick={() => dispatch(removeFromCart(product))}
            >
              DELETE
            </button>
          )}
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
