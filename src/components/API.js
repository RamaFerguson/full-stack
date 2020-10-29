import React, { useState, useEffect } from "react";

const API = () => {
  const [hasError, setErrors] = useState(false);
  const [items, setItems] = useState({});

  async function fetchData() {
    const res = await fetch("https://api.randomuser.me/");
    res
      .json()
      .then((res) => setItems(res.results[0]))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(items);
  return (
    <div>
      <span>Gender: {items.gender}</span>
      <br></br>
      <span>Email: {items.email}</span>
      <br></br>
      <span>Cell: {items.cell}</span>
    </div>
  );
};
export default API;
