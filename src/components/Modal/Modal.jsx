import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  closeModal,
  // incrementPrice,
  // decrementPrice,
} from "../../redux/modal-reducer";
import { addCoin } from "../../redux/portfolio-reducer";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  ModalOverlay,
  ModalWindow,
  ModalBody,
  ModalClose,
  ModalFooter,
} from "../../styled-components/Modal-styles";

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
