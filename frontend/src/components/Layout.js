import React from 'react';
import GlobalStyle from '../styles/GlobalStyles';
import Footer from './Footer';
import Nav from './Nav';

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
