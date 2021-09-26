import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Cart from "../Cart/Cart";
import Singer from "../Singer/Singer";
import "./SingersContainer.css";
const SingersContainer = () => {
  const [singers, setSingers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./singers.JSON")
      .then((res) => res.json())
      .then((data) => setSingers(data));
  }, []);
  const handleAddToCart = (singer) => {
    const newCart = [...cart, singer];
    setCart(newCart);
  };
  return (
    <div className="singer-container">
      <div className="row">
        {singers.map((singer) => (
          <Singer
            key={singer.id}
            singer={singer}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} key={cart.key} />
      </div>
    </div>
  );
};

export default SingersContainer;
