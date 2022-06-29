import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/Product/ProductSlice";
function Cart() {
  const dispatch = useDispatch();
  const pro = useSelector((state) => state.product);
  console.log(pro);
  return (
    <div>
      {pro.map((p) => (
        <div style={{ maxWidth: 600, border: "1px solid" }}>
          <h2>{p.title}</h2>
          <img src={p.image} style={{ height: 200 }} />
          <h1>{p.price}</h1>
          <h5>{p.description}</h5>
          <button onClick={() => dispatch(remove(p.id))}>
            Remove from Cart
          </button>
        </div>
      ))}
      {pro.length}
    </div>
  );
}

export default Cart;
