import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  console.log();
  return (
    <div>
      <h1>{params.productId}</h1>
    </div>
  );
};

export default ProductDetail;
