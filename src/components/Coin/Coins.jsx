import React from "react";
import './Coin.module.css';
import { NavLink } from "react-router-dom";


function Coins(props) {

    let path = "/" + `${props.name}`;
    return (
        
        <td> <NavLink to={path}> {props.name}</NavLink> </td>
        
    )
}


export default Coins; 