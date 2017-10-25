import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from 'components/atoms/Card';
import Wrapper from './wrapper';

const IMG_URL = 'https://cdn0.iconfinder.com/data/icons/gray-business-toolbar/512/product-3-512.png';

class Product extends Component {
  state = {
    quantity: 0,
  }
  addItemToCart = (id) => {
    this.props.addItem(id, this.state.quantity);
    this.setState({ quantity: 0 });
  }
  render() {
    const { name, price, stock, category, id } = this.props;
    return (
      <Wrapper>
        <Link to={`/view/${id}`}>
          <Card color="black">
            <p>{name}</p>
            <img src={IMG_URL} alt="product" />
            <div className="details">
              <div className="detail">
                <span>Price: </span>{price}
              </div>
              <div className="detail">
                <span>Stock: </span>{stock}
              </div>
              <div className="detail">
                <span>Category: </span>{category}
              </div>
            </div>
          </Card>
        </Link>
      </Wrapper>
    );
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default Product;
