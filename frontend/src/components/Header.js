import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 1rem var(--xPadding) 0;

  display: flex;
  flex-direction: column;
  align-items: center;
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
