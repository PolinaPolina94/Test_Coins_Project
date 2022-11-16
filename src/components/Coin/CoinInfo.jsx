import React from "react";
import classes from './Coin.module.css'
import { useNavigate } from "react-router-dom";


function CoinInfo(props) {

    const navigate = useNavigate();

    return (
        <div className={classes.coinInfo}>
            <div>
        <div className={`${classes.coinInfoItem} ${classes.coinInfoWithButton}`}>{props.coinInfo.id}
        <button onClick={() => navigate(-1)} className={classes.button}>Go back</button>
        </div>
        <div className={classes.coinInfoItem}>Rank: {props.coinInfo.rank} </div>
        <div className={classes.coinInfoItem}>Symbol:{props.coinInfo.symbol} </div>
        <div className={classes.coinInfoItem}>Name: {props.coinInfo.name} </div>
        <div className={classes.coinInfoItem}>Supply: {props.coinInfo.supply} </div>
        <div className={classes.coinInfoItem}>MaxSupply: {props.coinInfo.maxSupply} </div>
        <div className={classes.coinInfoItem}>MarketCapUsd: {props.coinInfo.marketCapUsd} </div>
        <div className={classes.coinInfoItem}>VolumeUsd24Hr: {props.coinInfo.volumeUsd24Hr} </div>
        <div className={classes.coinInfoItem}>PriceUsd: {props.coinInfo.priceUsd} </div>
        <div className={classes.coinInfoItem}>ChangePercent24Hr: {props.coinInfo.changePercent24Hr} </div>
        <div className={classes.coinInfoItem}>Vwap24Hr: {props.coinInfo.vwap24Hr} </div>
        </div>
        <div>
            <img src="https://illustrators.ru/uploads/illustration/image/1392128/62jKdaoB_Dw.jpg" alt="grafic"></img>
        </div>
        </div>

    )
}

export default CoinInfo;