import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  bottom: 0;
`;
const ModalWindow = styled.div`

  max-width: 500px;
  height: 400px;
  background-color: white;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  border-radius: 20px;
 

`;

const ModalBody = styled.div`
    font-size: 20px;
    color: black;
    height: 65%;
    margin: auto;
    padding-top: 20px;
`

const ModalClose = styled.div`
  text-align: right;
  padding-right: 15px;
  font-size: 40px;
  color: gray;
  cursor: pointer;
`;

const ModalFooter = styled.button`
  background-color: gray;
  border-radius: 10px;
  font-size: 14px;
  margin: 20px;
  height: 10%;
  cursor: pointer;
  :hover {
    background-color: #eee;
  }
`;

function Modal(props) {
  return (

    //  props.isOpen && 

    <ModalOverlay>
      <ModalWindow>
        <ModalClose> x </ModalClose>
        <ModalBody> Hello, modal </ModalBody> 
        <ModalFooter> Submit </ModalFooter>
      </ModalWindow>
      
    </ModalOverlay>

    
  );
}

export default Modal;
