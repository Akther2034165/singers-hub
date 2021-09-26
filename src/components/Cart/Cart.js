import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import AddSinger from "../AddSinger/AddSinger";
const Cart = (props) => {
  const { cart } = props;
  //using font aweosome icon
  const icon = <FontAwesomeIcon icon={faUser} />;
  //updating cart total
  let total = 0;
  for (const singer of cart) {
    total = total + parseInt(singer.salary);
  }
  return (
    <div className="m-3 border borber-3">
      <div className="px-5">
        <h3>
          Singer Added:
          <span className="text-success">
            &nbsp;{props.cart.length}&nbsp;
            {icon}
          </span>
        </h3>
        <hr />
        <h4>
          Total : $<span className="text-success">{total}</span>
        </h4>
        {cart.map((soloSinger) => (
          <AddSinger soloSinger={soloSinger} key={soloSinger.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
