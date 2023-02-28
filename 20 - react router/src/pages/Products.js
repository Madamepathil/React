import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    { id: Math.random.toString(), name: "a book" },
    { id: Math.random.toString(), name: "a carpet" },
    { id: Math.random.toString(), name: "a glas" },
  ];
  return (
    <>
      <ul>
        <li>
          <Link to="/products/p1">book</Link>{" "}
        </li>
        <li>
          <Link to="/products/p2">carpet</Link>{" "}
        </li>
        <li>
          <Link to="/products/p3">sofa</Link>{" "}
        </li>
      </ul>
    </>
  );
};

export default Products;
