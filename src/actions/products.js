import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_DATA: 'PRODUCTS_fetch_data',
  FETCH_DATA_SUCCESFULL: 'PRODUCTS_fetch_data_succesfull',
  FETCH_DATA_ERROR: 'PRODUCTS_fetch_data_error',
  FILTER_BY_CATEGORY: 'PRODUCT_filter_by_category',
  ADD_ITEM_TO_CART: 'PRODUCT_add_item_to_cart',
  ADD_ITEM: 'PRODUCT_add_item',
};

const PORT = process.env.PORT || 3000;

export const getData = () => (dispatch) => {
  const request = axios(`http://localhost:${PORT}/products`);
  dispatch({ type: ACTION_TYPES.FETCH_DATA });
  request
  .then((response) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_SUCCESFULL, payload: response.data });
  })
  .catch((error) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_ERROR, payload: error.message });
  });
};

export const filterByCategory = categories => (dispatch) => {
  const categoriesToSend = categories.length ? categories : false;
  dispatch({ type: ACTION_TYPES.FILTER_BY_CATEGORY, payload: categoriesToSend });
};

export const addItemToCart = (id, quantity) => (dispatch, getState) => {
  const itemSelected = getState().products.items.filter(item => item.id === id)[0];
  if (itemSelected.stock >= +quantity) {
    itemSelected.stock -= +quantity;
  }
  dispatch({ type: ACTION_TYPES.ADD_ITEM_TO_CART, payload: itemSelected });
};

export const addItem = () => (dispatch) => {
  const product = {
    id: 986,
    name: 'Product Added',
    price: 18,
    stock: 56,
    category: 'F',
  };
  axios.post(`http://localhost:${PORT}/products`, product);
  dispatch({ type: ACTION_TYPES.ADD_ITEM, payload: product });
};
