import { ACTION_TYPES } from 'actions/products';

const INITIAL_STATE = {
  items: [],
  selectedCategory: false,
  loading: false,
  error: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { ...state, items: action.payload, loading: false };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION_TYPES.FILTER_BY_CATEGORY:
      return { ...state, selectedCategory: [...action.payload] };
    case ACTION_TYPES.ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}
