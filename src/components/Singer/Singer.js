import React from "react";
import "./Singer.css";
const Singer = (props) => {
  const { name, img, gender, salary, age, work } = props.singer;
  return (
    <div className="col-md-4">
      <div className="card-group h-80 m-3">
        <div className="card mt-2" id="card-bg">
          <img src={img} className="card-img-top p-3 h-50" alt="..." />
          <div className="card-body m-3">
            <h5>Name : {name}</h5>
            <p>Gender : {gender}</p>
            <p>Age : {age}</p>
            <p>Salary : {salary}</p>
            <p>Profession : {work}</p>
            <button
              onClick={() => props.handleAddToCart(props.singer)}
              className="btn-primary"
            >
              Selected
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singer;
