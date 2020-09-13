import React, { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";

export default () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4400/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("Error:", err));
  }, []);

  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id != productId));
  };

  return (
    <div>
      <ProductForm />
      <ProductList
        products={products}
        setProducts={setProducts}
        removeFromDom={removeFromDom}
      />
    </div>
  );
};
