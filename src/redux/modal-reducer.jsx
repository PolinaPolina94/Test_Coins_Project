
const SHOW_MODAL = "SHOW_MODAL";

const initialState = {
  isOpen: false,
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      
      return {
        ...state,
        isOpen: true,
      };
    default:
      return state;
  }
};

export const showModal = () => {
  return { type: SHOW_MODAL };
};

export default ModalReducer;
