import React, { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getCoinInfo } from "../../redux/coin-reducer";
import { showModal } from "../../redux/modal-reducer";

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
  const coinInfo = useSelector((state) => state.coins.coinInfo);
  const dispatch = useDispatch();
  const { coinId } = useParams();

  useEffect(() => {
    dispatch(getCoinInfo(coinId));
  }, [dispatch, coinId]);

  return (
    <Container>
      <CoinInfoWithButtons>
        {coinInfo.id}
        <BackButton onClick={() => navigate(-1)}>Go back</BackButton>

        <StyledNavLink to={"/portfolio"}>
          {" "}
          <button
            onClick={() => {
              dispatch(showModal(true, coinInfo.name));
            }}
          >
            {" "}
            +{" "}
          </button>{" "}
        </StyledNavLink>
      </CoinInfoWithButtons>
      <CoinInfoItem>Rank: {coinInfo.rank} </CoinInfoItem>
      <CoinInfoItem>Symbol:{coinInfo.symbol} </CoinInfoItem>
      <CoinInfoItem>Name: {coinInfo.name} </CoinInfoItem>
      <CoinInfoItem>Supply: {coinInfo.supply} </CoinInfoItem>
      <CoinInfoItem>MaxSupply: {coinInfo.maxSupply} </CoinInfoItem>
      <CoinInfoItem>MarketCapUsd: {coinInfo.marketCapUsd} </CoinInfoItem>
      <CoinInfoItem>VolumeUsd24Hr: {coinInfo.volumeUsd24Hr}</CoinInfoItem>
      <CoinInfoItem>PriceUsd: {coinInfo.priceUsd} </CoinInfoItem>
      <CoinInfoItem>
        ChangePercent24Hr: {coinInfo.changePercent24Hr}
      </CoinInfoItem>
      <CoinInfoItem>Vwap24Hr: {coinInfo.vwap24Hr} </CoinInfoItem>
    </Container>
  );
}

export default CoinInfo;
