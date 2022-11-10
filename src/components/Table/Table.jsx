import axios from "axios"; 
import React, { useEffect, useState } from 'react'; 
import classes from './Table.module.css'

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
                <tbody>
        {coins.map(coin => (
            <tr key={coin.id}> 
            <td key={coin.id}> {coin.id} </td>
            <td key={coin.rank}> {coin.rank} </td>
            <td key={coin.symbol}> {coin.symbol} </td>
            <td key={coin.name}> {coin.name} </td>
            <td key={coin.supply}> {coin.supply} </td>
            <td key={coin.maxSupply}> {coin.maxSupply} </td>
            <td key={coin.marketCapUsd}> {coin.marketCapUsd} </td>
            <td key={coin.volumeUsd24Hr}> {coin.volumeUsd24Hr} </td>
            <td key={coin.priceUsd}> {coin.priceUsd} </td>
            <td key={coin.changePercent24Hr}> {coin.changePercent24Hr} </td>
            <td key={coin.vwap24Hr}> {coin.vwap24Hr} </td>
            </tr>
          ))}
</tbody>
            </table>
        </div>
    )
};

export default Table;  




