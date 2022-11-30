import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/modal-reducer";

const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  // transform: scale(1);
  // transform: ${(props) => (props.active ? "scale(1)" : "scale(0)")};
`;

// const ModalOverlayActive = styled.div`
// position: fixed;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.4);
//   bottom: 0;
//   display:flex;
//   align-items: center;
//   justify-content: center;
//   transform: scale(0);
// `

const ModalWindow = styled.div`
  width: 500px;
  height: 400px;
  background-color: white;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
`;

const ModalBody = styled.div`
  font-size: 20px;
  color: black;
  height: 65%;
  margin: auto;
  padding-top: 20px;
`;

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
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  return (
    isOpen && (
      <ModalOverlay
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        <ModalWindow onClick={(e) => e.stopPropagation()}>
          <ModalClose
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            {" "}
            x{" "}
          </ModalClose>
          <ModalBody> Hello, modal </ModalBody>
          <ModalFooter> Submit </ModalFooter>
        </ModalWindow>
      </ModalOverlay>
    )
  );
}

export default Modal;
