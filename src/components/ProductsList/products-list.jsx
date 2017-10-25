import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Product from 'components/Product';

import Wrapper from './wrapper';

class ProductList extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      stock: PropTypes.number,
      category: PropTypes.string,
    })),
    getData: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    addItemToCart: PropTypes.func,
  }
  static defaultProps = {
    products: [],
    getData: () => null,
    addItemToCart: () => null,
    loading: false,
    error: false,
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { products, loading, error, addItemToCart } = this.props;
    return (
      <Wrapper>
        <h3>ProductList</h3>
        {loading && <div className="loading">Loading<span>.</span><span>.</span><span>.</span></div>}
        {error && <div className="error">{error}</div>}
        {products.length > 0 && products.filter(product => product.stock > 0).map(product =>
          (<Product
            key={product.id}
            addItem={(id, quantity) => addItemToCart(id, quantity)}
            {...product}
          />))}
      </Wrapper>
    );
  }
}

export default ProductList;
