import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="bg-secondary text-light p-3">
      <div className="header p-2">
        <h2 className="text-info">Singers Hub</h2>
        <input
          type="text"
          placeholder="search your favourite singer"
          name=""
          id="input"
        />
        <button className="btn-success" id="search-btn">
          Search
        </button>
        <hr />
        <p>
          <small>
            You can find and deal with The greatest vocalists, frontmen, and
            divas from rock, pop, metal, and more here.
          </small>
        </p>
        <h4>
          Total Budget : <span className="text-info">150 Million</span> <br />
          <br />
        </h4>
      </div>
    </div>
  );
};

export default Header;
