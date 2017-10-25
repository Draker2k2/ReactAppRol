import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/atoms/Button';

import Wrapper from './wrapper';

const IMG_URL = 'https://cdn0.iconfinder.com/data/icons/gray-business-toolbar/512/product-3-512.png';

const ViewProduct = () => (
  <Wrapper>
    <img src={IMG_URL} alt="product" />
    <div className="details">
      <Link to="/efsgsghsdgsdfg"><Button>Back</Button></Link>
      <h1>NAME</h1>
      <p><strong>Description:</strong> asdsadsadsadsadsadsadsadsadsadsadsad
        asdsadsadasdasdsadsadsadsadsadsadasdasdasdasdasdsadas
        asdsadsadasdasdsadasdasdasdasdasdasdasdasdasdasdasdasd
      </p>
      <p><strong>Category:</strong> A</p>
      <p><strong>Price:</strong> 1$</p>
      <p><strong>Stock:</strong> 10</p>
      <Button>Buy</Button>
    </div>
  </Wrapper>
);

export default ViewProduct;
