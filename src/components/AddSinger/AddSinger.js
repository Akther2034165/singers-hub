import React from "react";
import "./AddSinger.css";
const AddSinger = (props) => {
  //destructuring data
  const { name } = props.soloSinger;
  return (
    <div>
      <div className="addSingerName">
        <p className="p-4 text-center">{name}</p>
      </div>
    </div>
  );
};

export default AddSinger;
