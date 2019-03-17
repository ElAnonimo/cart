import { ADD_ITEM, GET_ITEMS } from '../actions/types';

const initialState = {
  itemList: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        itemList: action.payload
      };
    case GET_ITEMS:
      return {
        ...state,
        itemList: action.payload
      };
    default:
      return state;
  }
};
