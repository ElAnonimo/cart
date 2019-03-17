import { ADD_ITEM, GET_ITEMS } from './types';

// add item
export const addItem = item => dispatch => {
  const prevItems = JSON.parse(localStorage.getItem('items')) || [];
  localStorage.setItem('items', JSON.stringify(prevItems.concat(item)));
  const currentItems = JSON.parse(localStorage.getItem('items'));

  dispatch({
    type: ADD_ITEM,
    payload: currentItems
  });
};

// get all items
export const getItems = () => dispatch => {
  const currentItems = JSON.parse(localStorage.getItem('items')) || [];

  dispatch({
    type: GET_ITEMS,
    payload: currentItems
  });
};
