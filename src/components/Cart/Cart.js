import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const singer of cart) {
    total = total + parseInt(singer.salary);
  }
  return (
    <div className="m-5" id="cart">
      <h3>Singer Added :{props.cart.length} </h3>
      <br />
      <h4>Total : ${total}</h4>

      <p>
        {cart.map((soloSinger) => (
          <div className="addSingerName">
            <p className="p-4">{soloSinger.name}</p>
          </div>
        ))}
      </p>
    </div>
  );
};

export default Cart;
