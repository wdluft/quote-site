import React from 'react';
import { Link } from 'gatsby';

function Nav() {
  return (
    <ul>
      <li>
        <Link t="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
}

export default Nav;
