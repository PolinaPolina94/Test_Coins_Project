import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Td = styled.td`
  width: 250px;
  height: 50px;
  position: relative;
  text-decoration: none;
  :hover {
    background-color: orange;
  }
`;

const Button = styled.button`
  position: absolute;
  left: 2px;
  padding: auto;
  margin-right: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  :hover {
   color: white;
  }
`;

function Coins(props) {
  let path = "/" + `${props.id}`;
  return (
    <Td>
      {" "}
      <StyledNavLink to={path}> {props.id}</StyledNavLink>
      <StyledNavLink to={"/portfolio"}>
        {" "}
        <Button
          onClick={() => {
            props.addCoin(props.name);
          }}
        >
          {" "}
          +{" "}
        </Button>{" "}
      </StyledNavLink>
    </Td>
  );
}

export default Coins;
