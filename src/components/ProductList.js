import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

export default (props) => {
  const { removeFromDom } = props;
  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:4400/api/products/" + productId)
      .then((res) => removeFromDom(productId))
      .catch((err) => console.log("Error:", err));
  };

  return (
    <div>
      <h1>All Products:</h1>

      {props.products.map((product, index) => {
        return (
          <h3>
            <Link to={"/products/" + product._id} key={index}>
              {product.title}
            </Link>
            <button
              onClick={(e) => {
                deleteProduct(product._id);
              }}
            >
              Delete
            </button>
          </h3>
        );
      })}
    </div>
  );
};
