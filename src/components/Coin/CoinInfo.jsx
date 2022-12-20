import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCoinInfo } from "../../redux/coin-reducer";
import { showModal } from "../../redux/modal-reducer";
import {
  Container,
  BackButton,
  CoinInfoItem,
  CoinInfoWithButtons,
  StyledNavLink,
} from "../../styled-components/Coin-styles";

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
              dispatch(showModal(true, coinInfo.name, coinInfo.priceUsd));
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
