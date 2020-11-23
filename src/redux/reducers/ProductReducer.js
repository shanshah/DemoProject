import { ProductActionTypes } from '../actions/ProductAction';

const initialState = {
  isFetching: false,
  data: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.SET_FETCHING_STATUS:
      return {
        ...state,
        isFetching: action.payload,
      };
    case ProductActionTypes.SET_PAGE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ProductActionTypes.SET_MORE_DATA:
      return {
        ...state,
        data: [...data, action.payload]
      };
    default:
      return state;
  }
};

export default ProductReducer;