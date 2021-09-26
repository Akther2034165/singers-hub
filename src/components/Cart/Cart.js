import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  //updating cart total
  let total = 0;
  for (const singer of cart) {
    total = total + parseInt(singer.salary);
  }
  return (
    <div className="m-3 border borber-3">
      <div className="px-5">
        <h3>
          Singer Added :
          <span className="text-success">{props.cart.length}</span>
        </h3>
        <hr />
        <h4>
          Total : $<span className="text-success">{total}</span>
        </h4>
        <div>
          {cart.map((soloSinger) => (
            <div className="addSingerName">
              <p className="p-4">
                {soloSinger.name} {soloSinger.key}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
