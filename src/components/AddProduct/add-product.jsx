import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from 'actions/products';
import Collapsible from 'react-collapsible';

import Button from 'components/atoms/Button';

const style = {
  width: '20%',
};

class AddProduct extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
  }
  addProduct = () => {
    this.props.addItem();
  }
  render() {
    return (
      <div style={style}>
        <Collapsible trigger="Add Product" >
          adfadfa
          a: <input text />
          <p />
          <Button onClick={this.addProduct}>Add Product</Button>
        </Collapsible>
      </div>
    );
  }
}

export default connect(null, { addItem })(AddProduct);
