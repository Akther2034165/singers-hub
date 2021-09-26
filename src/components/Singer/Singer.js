import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Singer.css";
const Singer = (props) => {
  //destructuring
  const { name, img, gender, salary, age, work } = props.singer;
  //calling font awesome icon
  const btnIcon = <FontAwesomeIcon icon={faPlus} />;
  return (
    <div className="col-md-4">
      <div className="card-group m-3">
        <div className="card h-40" id="card">
          <img src={img} className="card-img-top  h-50" alt="..." />
          <div className="card-body mx-2">
            <h5>Name : {name}</h5>
            <p>Gender : {gender}</p>
            <p>Age : {age}</p>
            <p>Salary : ${salary}</p>
            <p>Profession : {work}</p>
            <button
              onClick={() => props.handleAddToCart(props.singer)}
              className="btn"
            >
              {btnIcon} Add Singer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singer;
