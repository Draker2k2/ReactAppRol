import styled from 'styled-components';
import colors from 'colors.js';

const Card = styled.div`
  width: 20%;
  height: 100%;
  float: left;
  border: solid 1px ${colors.primary};
  border-radius: 5px;
  margin: 5px;
  p {
    background-color: ${props => colors[props.color] || colors.primary};
    color: ${colors.white};
    font-weight: bold;
    padding: 5px;
    margin-top: 0;
  }
  div {
    margin: 0 0 10px 5px;
  }
`;

export default Card;
