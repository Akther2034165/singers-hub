import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Singer from "../Singer/Singer";
import "./SingersContainer.css";
const SingersContainer = () => {
  const [singers, setSingers] = useState([]);
  useEffect(() => {
    fetch("./singers.JSON")
      .then((res) => res.json())
      .then((data) => setSingers(data));
  }, []);
  return (
    <div className="singer-container">
      <div className="row">
        {singers.map((singer) => (
          <Singer key={singer.id} singer={singer} />
        ))}
      </div>
      <div className="cart-container">
        <h3>Singer Added : </h3>
      </div>
    </div>
  );
};

export default SingersContainer;
