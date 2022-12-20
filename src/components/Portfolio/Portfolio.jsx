import React from "react";
import { useNavigate } from "react-router-dom";
import PortfolioList from "./PortfolioList";
import { useSelector } from "react-redux";
import { Button, Header } from "../../styled-components/Portfolio-styles";

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
