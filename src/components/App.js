//@flow
import * as React from 'react';
import styled, {injectGlobal} from 'styled-components';
import styledNormalize from 'styled-normalize';
import VisibleTodoList from './VisibleTodoList.js';

const MAIN_BACK = '#445963';
const MAIN_TEXT= '#1b1b1e';
const HEADER_BACK= '#1b3039';
const HEADER_TEXT= '#f1f1f1';

injectGlobal`
  ${styledNormalize}

  body {
  background: ${MAIN_BACK};
  color: ${MAIN_TEXT};
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  }
`;

const Header = styled.h1`
  background: ${HEADER_BACK};
  color: ${HEADER_TEXT};
  margin: 0 !important;
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: normal;
`;

const Container = styled.div`
  width: 79%;
  margin: 10vh auto 0 auto;
  background-color: #f7f7f7;
  box-shadow: 0 0 3px rgba(0,0,0, 0.1);
  @media only screen and (min-width: 900px) {
    width: 30%;
  }
`;

const App = () => (
  <Container>
    <Header>ToDo App</Header>
    <VisibleTodoList />
  </Container>
);

export default App;
