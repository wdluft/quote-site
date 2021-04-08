import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  a {
    color: var(--white);
    font-size: var(--h5);
    cursor: pointer;
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
