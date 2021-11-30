import {
  GET_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "../constants/ProductActionType";

// initial data reducer
const INITIAL_STATE = [
  { id: 1, name: "Laptop", stock: 5 },
  { id: 2, name: "Camera", stock: 10 },
  { id: 2, name: "Laptop", stock: 20 },
];

//reducer
function productReducer(state = { products: INITIAL_STATE }, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return applyAddProduct(state, action);
    case UPDATE_PRODUCT:
      return applyUpdateProductStock(state, action);
    default:
      return state;
  }
}

// action reducer
const applyAddProduct = (state, action) => {
  return {
    products: [...state.products, action.payload],
  };
  // const product = [...state, action.payload];
  // return product;
};

const applyUpdateProductStock = (state, action) => {
  const products = [...state];
  products.map((prod) => {
    if (prod.id === action.payload.id) {
      prod.stock = action.payload.stock;
      prod.name = action.payload.name;
      return prod;
    }
    return prod;
  });
  return products;
};

export default productReducer;
