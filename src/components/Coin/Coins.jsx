import React from "react";
import "./Coin.module.css";
import { NavLink } from "react-router-dom";
import classes from "./Coins.module.css";

function Coins(props) {
  let path = "/" + `${props.id}`;
  return (
    <td className={classes.td}>
      {" "}
      <NavLink to={path}> {props.id}</NavLink>
      <NavLink to={"/portfolio"}>
        {" "}
        <button
          className={classes.btn}
          onClick={() => {
            props.addCoin(props.name);
          }}
        >
          {" "}
          +{" "}
        </button>{" "}
      </NavLink>
    </td>
  );
}

export default Coins;
