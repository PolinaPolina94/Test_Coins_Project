import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.main}>
      <div className={classes.img}>
        <NavLink to={"/portfolio"}>
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/2483/2483322.png"
            alt="portfolio"
          />{" "}
        </NavLink>
        <NavLink to={"/"}> 
        {" "}
          <img
            src="https://s3.amazonaws.com/stickers.wiki/luluicon/6414541.512.webp"
            alt="home"
          />{" "}
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
