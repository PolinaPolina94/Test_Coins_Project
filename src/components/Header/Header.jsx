import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <h2> MY COINCAP </h2>
      <div className={classes.imgMyCoins}>
        <NavLink to={"/portfolio"}>
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/2483/2483322.png"
            alt="portfolio"
          />{" "}
          <p>My coins</p>
        </NavLink>
      </div>{" "}
      <div className={classes.imgHome}>
        <NavLink to={"/"}>
          <img
            src="https://s3.amazonaws.com/stickers.wiki/luluicon/6414541.512.webp"
            alt="home"
          />{" "}
          <p> Home </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
