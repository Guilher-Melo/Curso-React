import ACTION_TYPES from "../actions/actionsTypes";

const initialState = {
  min: 1,
  max: 10
};

export default function numerosReducer(state = initialState, action) {
  switch(action.type) {
    case ACTION_TYPES.NUM_MIN_ALTERADO:
      return {
        ...state,
        min: action.payload
      }
      case ACTION_TYPES.NUM_MAX_ALTERADO:
        return {
          ...state,
          max: action.payload
        }  
    default:
      return state;
  };
};