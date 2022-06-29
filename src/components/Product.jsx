import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/Product/ProductSlice";
import { Link } from "react-router-dom";

function Product() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pro = useSelector((state) => state.product);
  console.log(pro);
  return (
    <div>
      {pro.length}
      {data.map((p) => (
        <div style={{ maxWidth: 600, border: "1px solid" }}>
          <h2>{p.title}</h2>
          <img src={p.image} style={{ height: 200 }} />
          <h1>{p.price}</h1>
          <h5>{p.description}</h5>
          <button onClick={() => dispatch(add(p))}>Add to cart</button>
        </div>
      ))}
      <Link to="cart">Cart</Link>
    </div>
  );
}

export default Product;
