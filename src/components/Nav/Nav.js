import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import house from "./pictures/homeIcon.png";

export default function Nav() {
  return (
    <div className="header">
      <Link to="/" className="iconContainer">
        <img src={house} alt="" className="houseIcon" />
        Houser
      </Link>
    </div>
  );
}
