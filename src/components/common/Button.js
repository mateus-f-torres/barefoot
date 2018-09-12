//@flow
import styled from 'styled-components';
import {lighten} from 'polished';

const HEADER_BACK= '#1b3039';
const HEADER_TEXT= '#f1f1f1';

const Button = styled.button`
  background-color: ${lighten(0.05, HEADER_BACK)};
  border: 1px solid ${HEADER_TEXT};
  color: white;
  margin: 0;
  padding: 0.8em 0.8em;
  height: 100%;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  display: inline-block;
  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    cursor: pointer;
    background-color: ${lighten(0.15, HEADER_BACK)};
  }
  &[type='submit'] {
    display: none;
  }
`;

export default Button;
