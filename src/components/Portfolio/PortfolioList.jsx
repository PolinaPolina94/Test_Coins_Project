import classes from "./Portfolio.module.css";
import React from "react";
import Item from "./Item";

function PortfolioList(props) {
  const coinsElements = [...props.listOfMyCoins].map((c) => {
    return <Item key={c.id} name={c.name} rank={props.rank} />;
  });

  return (
    <div className={classes.list}>
      List:
      {coinsElements}
    </div>
  );
}

export default PortfolioList;
