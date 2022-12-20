import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ModalWindow = styled.div`
  width: 500px;
  height: 400px;
  background-color: white;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
`;

export const ModalBody = styled.div`
  font-size: 20px;
  color: black;
  height: 65%;
  margin: auto;
  padding-top: 20px;
`;

export const ModalClose = styled.div`
  text-align: right;
  padding-right: 15px;
  font-size: 40px;
  color: gray;
  cursor: pointer;
`;

export const ModalFooter = styled.button`
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