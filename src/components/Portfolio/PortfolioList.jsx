import classes from "./Portfolio.module.css";
import React from "react";
import Item from "./Item";

function PortfolioList(props) {
  const coinElement = [...props.listOfMyCoins].map((c) => {
    return <Item key={c.id} name={c.name} />;
  });

  return (
    <div>
      {coinElement.length > 0 ? (
        <ol className={classes.list}> List: {coinElement} </ol>
      ) : (
        <div> no coins </div>
      )}
    </div>
  );
}

export default PortfolioList;
