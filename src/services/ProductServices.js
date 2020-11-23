import 'whatwg-fetch';

const ProductServices = {
  fetchData: () =>
    fetch('http://jsonplaceholder.typicode.com/photos?start=0&_limit=5', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
};

export default ProductServices;