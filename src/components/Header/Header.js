import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="bg-secondary text-light p-3">
      <div className="p-2">
        <h3>Best Singers of All Time</h3>
        <hr />
        <p>
          <small>
            The top 10 best singers ever based on over 400,000 votes. The
            greatest vocalists, frontmen, and divas from rock, pop, metal, and
            more.
          </small>
        </p>
        <h4>
          Total Budget : <span className="text-info">150 Million</span>
        </h4>
      </div>
    </div>
  );
};

export default Header;
