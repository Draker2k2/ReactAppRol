import styled from 'styled-components';
import colors from 'colors.js';

const Wrapper = styled.div`
  display: flex;
  img {
    margin: 0 30px;
    border: solid 5px ${colors.black};
    box-shadow: 10px 10px 5px #888888;
    border-radius: 5px;
  }
  .details {
    margin: 0 30px;
    padding: 0 50% 20px 0;
    h1 {
      color: ${colors.black};
    }
  }
`;

export default Wrapper;
