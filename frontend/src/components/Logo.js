/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import LogoPencil from '../images/Logo-Pencil.svg';

const LogoWrapper = styled((props) => <Link {...props} />)`
  width: max-content;
  display: flex;
  color: var(--primary);
  font-size: var(--h4);
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1px;
  background-color: var(--primary);
  background-image: var(--gradient);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  img {
    width: var(--h3);
  }
`;

function Logo() {
  return (
    <LogoWrapper to="/">
      Quote&nbsp;
      <img src={LogoPencil} alt="Logo" />
      &nbsp;Book
    </LogoWrapper>
  );
}

export default Logo;
