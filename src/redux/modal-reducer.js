const SHOW_MODAL = "SHOW_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

const initialState = {
  isOpen: false,
  name: null,
  price: 0
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isOpen: true,
        name: action.name,
        price: action.price
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export const showModal = (isOpen, name, price) => {
  return { type: SHOW_MODAL, isOpen, name, price};
};

export const closeModal = (isOpen) => {
  return { type: CLOSE_MODAL, isOpen };
};

export default ModalReducer;
