import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const Detail = (props) => {
  const [product, setProduct] = useState({});

  const deleteProduct = () => {
    axios
      .delete("http://localhost:4400/api/products/" + props.id)
      .then((data) => navigate("/products"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4400/api/products/" + props.id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div>
      <h3>Title: {product.title}</h3>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      {/* <button>Edit</button> */}
      <button onClick={deleteProduct}>Delete</button>
      {/* <button>Go Back</button> */}
    </div>
  );
};

export default Detail;
