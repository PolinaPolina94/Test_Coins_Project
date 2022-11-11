import React from "react";
import './Coin.module.css';

function Coins(props) {

    let path = "/" + `${props.name}`;

    return (
        <td> <a href={path}> {props.name}</a> </td>
    )
}

export default Coins; 