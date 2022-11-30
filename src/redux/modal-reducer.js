const SHOW_MODAL = "SHOW_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

const initialState = {
  isOpen: false,
  name: null,
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isOpen: true,
        name: action.name,
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

export const showModal = (isOpen, name) => {
  return { type: SHOW_MODAL, isOpen, name };
};

export const closeModal = (isOpen) => {
  return { type: CLOSE_MODAL, isOpen };
};

export default ModalReducer;
