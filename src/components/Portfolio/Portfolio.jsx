import React from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
import classes from "./Portfolio.module.css";
import PortfolioList from "./PortfolioList";

function Portfolio(props) {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)} className={classes.button}>
        Go back
      </button>
      <h2> MY COINS </h2>

      <PortfolioList listOfMyCoins={props.listOfMyCoins} />
    </div>
  );
}

export default Portfolio;
