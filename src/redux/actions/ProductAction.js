import {
  GET_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "../constants/ProductActionType";

export const doAddProduct = (id, name, stock) => {
  return {
    type: ADD_PRODUCT,
    payload: { id: id, name: name, stock: stock },
  };
};

export const doUpdateProduct = (id, name, stock) => {
  return {
    type: UPDATE_PRODUCT,
    payload: { id: id, name: name, stock: stock },
  };
};
