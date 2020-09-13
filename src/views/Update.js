import React, { useEffect, useState } from "react";
import axios from "axios";

export default (props) => {
  const { id } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4400/api/products/" + id)
      .then((response) => {
        setTitle(response.data.title);
        setPrice(response.data.price);
        setDescription(response.data.description);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4400/api/products/" + id, {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log("Error:", err));
  };

  return (
    <div>
      <h2>Update a Product</h2>
      <form onSubmit={submitHandler}>
        <p>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </p>
        <p>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
