const SHOW_MODAL = "SHOW_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const INCREMENT_PRICE = "INCREMENT_PRICE";
const DECREMENT_PRICE = "DECREMENT_PRICE";

const initialState = {
  isOpen: false,
  name: null,
  price: 0,
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
      case INCREMENT_PRICE:
        return {
        ...state, 
        price: action.price++   
        };
        case DECREMENT_PRICE:
        return {
          ...state,
          price: action.price-- 
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

export const incrementPrice = (price) => {
  return { type: INCREMENT_PRICE, price};
};

export const decrementPrice = (price) => {
  return { type: DECREMENT_PRICE, price};
};

export default ModalReducer;
