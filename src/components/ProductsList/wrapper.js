import styled from 'styled-components';
import colors from 'colors.js';

const Wrapper = styled.div`
  width: 100%;
  margin-left: 20px;
  h3 {
    color: ${colors.black};
  }
  @keyframes blink {
    0% {
      opacity: .2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: .2;
    }
  }
  .loading {
    width: 100%;
    padding: 5px 0;
    font-size: 54px;
    color: ${colors.black};
    text-align: center;
    span {
      animation-name: blink;
      animation-duration: 1.4s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
    }
    span:nth-child(2) {
      animation-delay: .2s;
    }
    span:nth-child(3) {
      animation-delay: .4s;
    }
  }
  .error {
    color: #c00;
    padding: 5px 0;
    font-size: 54px;
    text-align: center;
  }
`;

export default Wrapper;
