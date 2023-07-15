import React from "react";
import SpacImg from "../assets/Space.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-5 bg-blue-500 text-white text-center text-xl fixed-header">
      <Link to="/">
        <img src={SpacImg} alt="spaceX" className="w-64" />
      </Link>
    </header>
  );
}

export default Header;
