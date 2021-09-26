import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Singer from "../Singer/Singer";
import "./SingersContainer.css";
const SingersContainer = () => {
  //declaring state
  const [singers, setSingers] = useState([]);
  const [cart, setCart] = useState([]);
  //fetcing json using useEffect
  useEffect(() => {
    fetch("/singers.JSON")
      .then((res) => res.json())
      .then((data) => setSingers(data));
  }, []);
  //handling cart & make a new array
  const handleAddToCart = (singer) => {
    const existSinger = cart.find(
      (singerName) => singerName.name === singer.name
    );
    if (!existSinger) {
      const newCart = [...cart, singer];
      setCart(newCart);
    } else {
      alert("This singer is already added to cart!");
    }
  };
  return (
    <div className="singer-container">
      <div className="row">
        {singers.map((singer) => (
          <Singer
            singer={singer}
            key={singer.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default SingersContainer;
