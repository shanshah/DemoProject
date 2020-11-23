import {combineReducers} from 'redux';

import ProductReducer from './redux/reducers/ProductReducer';

export default combineReducers({
  resultsPage: ProductReducer,
});
