import React from "react";
import Item from "./Item";
import styled from "styled-components";

const List = styled.ol`
  font-size: 16px;
  text-align: left;
  margin-left: 40px;
  margin-top: 50px;
`;

function PortfolioList(props) {
  const coinElement = [...props.listOfMyCoins].map((c) => {
    return <Item key={c.id} name={c.name} />;
  });

  return (
    <div>
      {coinElement.length > 0 ? (
        <List> List: {coinElement} </List>
      ) : (
        <div> no coins </div>
      )}
    </div>
  );
}

export default PortfolioList;
