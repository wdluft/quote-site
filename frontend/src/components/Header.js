import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav />
    </HeaderWrapper>
  );
}

export default Header;
