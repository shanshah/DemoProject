import  React from 'react';
import  ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/store';
import ProductContainer from './src/views/ProductsContainer';
ReactDOM.render(
  <Provider store={store}>
    <ProductContainer />
  </Provider>,
  document.getElementById('app'),
);
