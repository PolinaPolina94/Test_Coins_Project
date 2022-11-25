import React from "react";
// import classes from "./Table.module.css";
import Coins from "../Coin/Coins";
import styled from "styled-components";

const StyledTable = styled.table` {
  background-color: blanchedalmond;
  margin-top:10px;
}
`
const Thead = styled.thead`
background-color: #eee;
`

const Tr = styled.tr`
 color: black;
 border: 1px solid rgb(153, 169, 85);
`
const Td = styled.td`

:hover {
  background-color: yellow;
}
`

function Table(props) {
  return (
    <>
             <StyledTable>
          <Thead>
            <Tr>
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
            </Tr>
          </Thead>
          {props.coins.map((coin) => (
            <tbody>
              <Tr>
                <Coins id={coin.id} addCoin={props.addCoin} name={coin.name} />
                <Td> {coin.rank} </Td>
                <Td> {coin.symbol} </Td>
                <Td> {coin.name} </Td>
                <Td> {coin.supply} </Td>
                <Td> {coin.maxSupply} </Td>
                <Td> {coin.marketCapUsd} </Td>
                <Td> {coin.volumeUsd24Hr} </Td>
                <Td> {coin.priceUsd} </Td>
                <Td> {coin.changePercent24Hr} </Td>
                <Td> {coin.vwap24Hr} </Td>
              </Tr>
            </tbody>
          ))}
        </StyledTable>
     
    </>
  );
}

export default Table;
