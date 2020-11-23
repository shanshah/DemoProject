import React from 'react';
import { connect } from 'react-redux';

import { ProductActions } from "../redux/actions/ProductAction";
import '../styles/product-styles.css';

class ProductsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  
  getProduct = (data) =>
    data.map((image) => (
      <div key={image.id} className="product-card-container">
        <div className="product-card">
          <img src={image.url} alt={image.title} className="product-image" />
          <div className="product-title">{image.title}</div>
          <div>
            <button
              className="delete-button"
              onClick={() => this.props.deleteProduct(image.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    ));
  
  render () {
    const { isFetching, data } = this.props.resultsPage;
    if (isFetching) {
      return (
        <h2 className="loading-info">Fetching page data...</h2>
      );
    }
    return (
      <div className="wrapper">
        <div className="container">
          {this.getProduct(data)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  resultsPage: state.resultsPage,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => {
    dispatch(ProductActions.getProductData());
  },
  deleteProduct: (productId) => {
    dispatch(ProductActions.deleteProduct(productId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);

