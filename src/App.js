import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./views/Main";
import { Router } from "@reach/router";
import Detail from "./views/Detail";
import Update from "./views/Update";

function App() {
  const [products, setProducts] = useState([]);
  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id != productId));
  };

  return (
    <div className="App">
      <Router>
        <Main path="products/" />
        <Detail path="products/:id/" removeFromDom={removeFromDom} />
        <Update path="products/:id/edit/" />
      </Router>
    </div>
  );
}

export default App;
