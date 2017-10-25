import styled from 'styled-components';
import colors from 'colors.js';

const Wrapper = styled.div`
  div {
    color: black;
  }
  img {
    margin: 5px;
    width: 128px;
    height: 128px;
    text-align: center;
    float: left;
  }
  span {
    font-weight: bold;
    color: ${colors.primary};
  }
  .detail {
    margin: 20px 0;
    text-align: center;
  }
  .add-cart {
    text-align: center;
    * {
      margin: 5px 5px;
    }
    input {
      width: 40px;
    }
  }
`;

export default Wrapper;
