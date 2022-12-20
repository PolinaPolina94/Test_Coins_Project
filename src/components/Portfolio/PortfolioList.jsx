import React from "react";
import Item from "./Item";
import { List, Block } from "../../styled-components/Portfolio-styles";

function PortfolioList(props) {
  const coinElement = [...props.listOfMyCoins].map((c) => {
    return <Item key={c.id} name={c.name} price={c.price} />;
  });

  return (
    <Block>
      {coinElement.length > 0 ? (
        <List> List: {coinElement} </List>
      ) : (
        <Block> no coins </Block>
      )}
    </Block>
  );
}

export default PortfolioList;
