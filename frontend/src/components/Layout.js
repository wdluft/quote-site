import React from 'react';
import GlobalStyle from '../styles/GlobalStyles';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
