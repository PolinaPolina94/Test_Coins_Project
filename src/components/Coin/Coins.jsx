import React from "react";
import { showModal } from "../../redux/modal-reducer";
import { useDispatch } from "react-redux";
import {
  Td,
  Button,
  StyledNavLinkCoin,
} from "../../styled-components/Coin-styles";

function Coins(props) {
  const dispatch = useDispatch();

  let path = "/" + `${props.id}`;
  return (
    <Td>
      {" "}
      <StyledNavLinkCoin to={path}> {props.id}</StyledNavLinkCoin>{" "}
      <Button
        onClick={() => {
          dispatch(showModal(true, props.name, props.price));
        }}
      >
        {" "}
        +{" "}
      </Button>{" "}
    </Td>
  );
}

export default Coins;
