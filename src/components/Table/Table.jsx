import axios from "axios"; 
import React, { useEffect, useState } from 'react'; 
import classes from './Table.module.css'
// import CoinInfo from "../Coin/CoinInfo";
// import { Routes, Route } from "react-router-dom";
import Coins from "../Coin/Coins"


function Table() {

    const [coins, setCoins] = useState([]);

    useEffect(()=>{
      const getCoins =  async () => {
        let response = await axios.get('https://api.coincap.io/v2/assets')
        setCoins(response.data.data); 
    }
    getCoins();
    }, [])

    return (
        <>
        <div className={classes.table}>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>rank</th>
                        <th>symbol</th>
                        <th>name</th>
                        <th>supply</th>
                        <th>maxSupply</th>
                        <th>marketCapUsd</th>
                        <th>volumeUsd24Hr</th>
                        <th>priceUsd</th>
                        <th>changePercent24Hr</th>
                        <th>vwap24Hr</th>
                    </tr>
                </thead>
                
                    
        {coins.map(coin => (
            <tbody>
            <tr> 
            <Coins name={coin.id}/>
            <td > {coin.rank} </td>
            <td > {coin.symbol} </td>
            <td > {coin.name} </td>
            <td > {coin.supply} </td>
            <td > {coin.maxSupply} </td>
            <td > {coin.marketCapUsd} </td>
            <td > {coin.volumeUsd24Hr} </td>
            <td > {coin.priceUsd} </td>
            <td > {coin.changePercent24Hr} </td>
             <td > {coin.vwap24Hr} </td>
            </tr>
            </tbody>
          ))}
        


            </table>
        </div>
        </>
    )
};

export default Table;  




