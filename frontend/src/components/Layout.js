import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';
import Footer from './Footer';
import Header from './Header';

const MainWrapper = styled.main`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: var(--xPadding);
`;

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
}

export default Layout;
