import ProductServices from '../../services/ProductServices';

const ProductActionTypes = {
  SET_FETCHING_STATUS: 'SET_FETCHING_STATUS',
  SET_PAGE_DATA: 'SET_PAGE_DATA: ',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
};

const ProductActions = {
  setFetchingStatus: payload => ({
    type: ProductActionTypes.SET_FETCHING_STATUS, payload: payload,
  }),
  setPageData: payload => ({
    type: ProductActionTypes.SET_PAGE_DATA, payload: payload,
  }),
  getProductData: () => (dispatch) => {
    dispatch(ProductActions.setFetchingStatus(true));
    ProductServices.fetchData().then(res => res.json())
      .then((data) => {
        dispatch(ProductActions.setFetchingStatus(false));
        dispatch(ProductActions.setPageData(data));
      })
      .catch(() => {
        console.log('Fetching data failed');
        dispatch(ProductActions.setFetchingStatus(false));
      });
  },
  deleteProduct: productId => (dispatch, getState) => {
    const { data } = getState().resultsPage;
    const updatedDate = data.filter((image) => image.id !== productId);
    dispatch(ProductActions.setPageData(updatedDate));
  },
};

export {
  ProductActionTypes,
  ProductActions,
};