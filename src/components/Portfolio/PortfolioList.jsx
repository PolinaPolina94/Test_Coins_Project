import React from "react";
import Item from "./Item";
import styled from "styled-components";

const List = styled.div`
  font-size: 16px;
  text-align: left;
  margin-left: 40px;
  margin-top: 50px;
  padding-top: 5px;
  
`;
const Block = styled.div`
  font-size: 16px;
  color: black;
`;

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
