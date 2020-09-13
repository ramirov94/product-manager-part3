import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4400/api/products", {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <div>
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Price</label>
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
