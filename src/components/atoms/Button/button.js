import styled from 'styled-components';
import colors from 'colors.js';

const Button = styled.button`
  padding: 5px;
  background-color: ${colors.black};
  color: ${colors.white};
  border: 0;
  border-radius: 10px;
  width: 50px;
  cursor: pointer;
  outline: 0;
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: initial;
  }
`;

export default Button;
