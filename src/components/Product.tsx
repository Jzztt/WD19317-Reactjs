import React from "react";

interface ProductProps {
  name: string;
  price: number;
}
const Product = (props: ProductProps) => {
    console.log(props);

  return (
    <>
      <div>{props.name}</div>
      <div>{props.price}</div>
    </>
  );
};

export default Product;
