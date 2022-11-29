import React from "react";
import { useNavigate } from "react-router-dom";
import PortfolioList from "./PortfolioList";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Button = styled.button`
  background: #eee;
  color: black;
`;
const Header = styled.h2`
  font-size: 24px;
  color: yellow;
`;

function Portfolio(props) {
  const navigate = useNavigate();
  const listOfMyCoins = useSelector((state) => state.portfolio.listOfMyCoins);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Go back</Button>
      <Header> MY COINS </Header>

      <PortfolioList listOfMyCoins={listOfMyCoins} />
    </div>
  );
}

export default Portfolio;
