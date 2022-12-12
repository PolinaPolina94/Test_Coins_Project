import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  closeModal,
  // incrementPrice,
  // decrementPrice,
} from "../../redux/modal-reducer";
import { addCoin } from "../../redux/portfolio-reducer";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import ModalForm from "../Form/Form";

const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
  const name = useSelector((state) => state.modal.name);
  const price = useSelector((state) => state.modal.price);

  // const decrement = () => dispatch(decrementPrice(price));
  // const increment = () => dispatch(incrementPrice(price));

  const [newPrice, setNewPrice] = useState(price);

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

          <ModalBody>
            {" "}
            <div>{name}</div>
            <div>
              {/* <button
                onClick={() => {
                  dispatch(increment(price));
                }}
              >
                {" "}
                plus{" "}
              </button> */}
              <div> Price for coin: {price} </div>
              {/* <button
                onClick={() => {
                  dispatch(decrement(price));
                }}
              >
                {" "}
                minus{" "}
              </button> */}
            </div>
            <form>
              <input
                type="number"
                name="coinCount"
                placeholder="count"
                onChange={(e) => {
                  setNewPrice(e.target.value * price);
                }}
              ></input>
              <div> General sum: {newPrice}</div>
            </form>
          </ModalBody>
          <NavLink to={"/portfolio"}>
            <ModalFooter
              onClick={() => {
                dispatch(addCoin(name, newPrice));
                dispatch(closeModal());
                setNewPrice(0);
              }}
            >
              {" "}
              Submit{" "}
            </ModalFooter>
          </NavLink>
        </ModalWindow>
      </ModalOverlay>
    )
  );
}

export default Modal;
