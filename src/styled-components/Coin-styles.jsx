import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  // display: inline;
`;
export const BackButton = styled.button`
  position: absolute;
  left: 10px;
  top: 10px;
`;
export const CoinInfoItem = styled.div`
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
export const CoinInfoWithButtons = styled.div`
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

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const Td = styled.td`
  width: 250px;
  height: 50px;
  position: relative;
  text-decoration: none;
  border-bottom: 2px solid green;
  :hover {
    background-color: orange;
  }
`;

export const Button = styled.button`
  position: absolute;
  left: 2px;
  padding: auto;
  margin-left: 5px;
  width: 20px;
  height: 20px;
  font-size: 10px;
  align-items: center;
  justify-content: center;
`;

export const StyledNavLinkCoin = styled(NavLink)`
  text-decoration: none;
  color: black;
  :hover {
    color: white;
  }
`;
