import * as React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import styledNormalize from 'styled-normalize';
import {useTranslation} from 'react-i18next';

import TodoListContainer from 'containers/todolist';

import list from 'assets/images/list.svg';
import logo from 'assets/images/mateus-f-torres.svg';
import RobotoRegular from 'assets/fonts/Roboto-Regular.ttf';

const MAIN_BACK = '#445963';
const MAIN_TEXT = '#1b1b1e';
const HEADER_BACK = '#1b3039';
const HEADER_TEXT = '#f1f1f1';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  @font-face {
    font-family: Roboto;
    src: url("${RobotoRegular}") format("truetype");
    font-style: normal;
    font-weight: normal;
  }

  body {
  background: ${MAIN_BACK};
  color: ${MAIN_TEXT};
  font-size: 1rem;
  font-family: Roboto, sans-serif;
  }
`;

const Header = styled.h1`
  background: ${HEADER_BACK};
  color: ${HEADER_TEXT};
  margin: 0 !important;
  padding: 0.75rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1.75rem;
  letter-spacing: 0.5px;
`;

const IconButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: transparent;
  padding: 0;
  line-height: 0;
  &:focus {
    outline: none;
    border: none;
  }
`

const Icon = styled.img`
  max-width: 30px;
  height: 30px;
`;

const Logo = styled.img`
  max-width: 100px;
`;

const Container = styled.div`
  width: 79%;
  max-width: 450px;
  margin: 10vh auto 0 auto;
  background-color: #f7f7f7;
  border: 3px solid #010101;
  box-shadow:
    0 6px 12px rgba(0,0,0, 0.2),
    0 4px 6px rgba(0,0,0,0.1);
`;

const Footer = styled.footer`
  margin: 15vh auto;
  width: 100%;
  text-align: center;
  float: right;
`;

const Title = styled.h1``;

const Link = styled.a``;

function App({fetchRandomActivity}) {
  const {t} = useTranslation();

  return (
    <Container>
      <Header>
        {t('app_title')}
        <IconButton onClick={fetchRandomActivity}>
          <Icon src={list} />
        </IconButton>
      </Header>
      <TodoListContainer />
      <Footer>
        <Title>{t('madeby')}</Title>
        <Link href="https://mateus-f-torres.github.io/">
          <Logo src={logo} />
        </Link>
      </Footer>
      <GlobalStyle />
    </Container>
  );
}

export default App;
