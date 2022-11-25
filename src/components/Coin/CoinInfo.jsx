import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  // display: inline;
`;
const BackButton = styled.button`
  position: absolute;
  left: 10px;
  top: 10px;
`;
const CoinInfoItem = styled.div`
  background: #eee;
  color: rgb(37, 30, 30);
  border-bottom: 1px solid black;
  font-size: 16px;
  padding: 20px 10px;
  text-align: center;
  margin: auto;
  margin-bottom: 5px;
  width: 50%;
`;
const CoinInfoWithButtons = styled.div`
  position: relative;
  background: #eee;
  color: rgb(37, 30, 30);
  border-bottom: 1px solid black;
  font-size: 16px;
  padding: 20px 10px;
  text-align: center;
  margin: auto;
  margin-bottom: 5px;
  width: 50%;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

function CoinInfo(props) {
  const navigate = useNavigate();

  return (
    <Container>
      <CoinInfoWithButtons>
        {props.coinInfo.id}
        <BackButton onClick={() => navigate(-1)}>Go back</BackButton>

        <StyledNavLink to={"/portfolio"}>
          {" "}
          <button
            onClick={() => {
              props.addCoin(props.coinInfo.name);
            }}
          >
            {" "}
            +{" "}
          </button>{" "}
        </StyledNavLink>
      </CoinInfoWithButtons>
      <CoinInfoItem>Rank: {props.coinInfo.rank} </CoinInfoItem>
      <CoinInfoItem>Symbol:{props.coinInfo.symbol} </CoinInfoItem>
      <CoinInfoItem>Name: {props.coinInfo.name} </CoinInfoItem>
      <CoinInfoItem>Supply: {props.coinInfo.supply} </CoinInfoItem>
      <CoinInfoItem>MaxSupply: {props.coinInfo.maxSupply} </CoinInfoItem>
      <CoinInfoItem>MarketCapUsd: {props.coinInfo.marketCapUsd} </CoinInfoItem>
      <CoinInfoItem>VolumeUsd24Hr: {props.coinInfo.volumeUsd24Hr}</CoinInfoItem>
      <CoinInfoItem>PriceUsd: {props.coinInfo.priceUsd} </CoinInfoItem>
      <CoinInfoItem>
        ChangePercent24Hr: {props.coinInfo.changePercent24Hr}
      </CoinInfoItem>
      <CoinInfoItem>Vwap24Hr: {props.coinInfo.vwap24Hr} </CoinInfoItem>
    </Container>
  );
}

export default CoinInfo;
