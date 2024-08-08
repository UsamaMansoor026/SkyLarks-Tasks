import React from "react";
import Dots from "./Dots";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav_list">
        <li>
          <a href="/">Gmail</a>
        </li>
        <li>
          <a href="/">Images</a>
        </li>
        <li>
          <a href="/">
            <Dots />
          </a>
        </li>
        <li>
          <button className="signIn_btn">Sign In</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
