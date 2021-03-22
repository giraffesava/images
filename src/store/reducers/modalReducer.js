import { TURN_ON_MODAL, TURN_OFF_MODAL } from '../actions/actionTypes';

const initialStore = {
  modalIsOn: false,
};

const modalReducer = (state = initialStore, action) => {
  switch (action.type) {
    case TURN_OFF_MODAL:
      return {
        ...state,
        modalIsOn: false,
      };
    case TURN_ON_MODAL:
      return {
        ...state,
        modalIsOn: true,
      };
    default:
      return state;
  }
};

export default modalReducer;
