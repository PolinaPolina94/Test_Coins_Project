import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import Modal from "../Modal/Modal";

const Td = styled.td`
  width: 250px;
  height: 50px;
  position: relative;
  text-decoration: none;
  border-bottom: 2px solid green;
  
  :hover {
    background-color: orange;
  }
`;

const Button = styled.button`
  position: absolute;
  left: 2px;
  padding: auto;
  margin-left:5px;
  width: 20px;
  height: 20px;
  font-size: 10px;
   align-items: center;
   justify-content: center; 
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
      {/* <StyledNavLink to={"/portfolio"}> */}
        {" "}
        <Button
          onClick={() => {
            
            // props.showModal()
            // <Modal isOpen={props.isOpen} showModal={props.showModal}/>
            // props.showModal(props.id);
          }}
        >
          {" "}
          +{" "}
        </Button>{" "}
      {/* </StyledNavLink> */}
    </Td>
  );
}

export default Coins;







// <Button
//           onClick={() => {
//             props.addCoin(props.name);
//           }}
//         >
//           {" "}
//           +{" "}
//         </Button>{" "}