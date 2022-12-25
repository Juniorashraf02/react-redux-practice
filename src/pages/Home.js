import React from "react";
import { useProduct } from './../context/ProductProvider';

export default function Home() {
  const {data} = useProduct();
  console.log(data);

  return <div>Home</div>;
}
