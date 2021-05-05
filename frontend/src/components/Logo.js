/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled((props) => <Link {...props} />)`
  width: 100%;
  color: var(--primary);
  font-size: var(--h3);
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  /* Gradient Text */
  background-color: var(--primary);
  background-image: var(--gradient);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Logo() {
  return (
    <LogoWrapper to="/">
      Quote&nbsp;
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.0175 4.64901L43.4758 1.52402L40.3508 12.9823M32.0175 4.64901L7.01754 29.649M32.0175 4.64901L40.3508 12.9823M40.3508 12.9823L15.3509 37.9823M7.01754 29.649L3.89254 32.774C3.34537 33.3212 2.91133 33.9707 2.6152 34.6857C2.31907 35.4006 2.16666 36.1668 2.16666 36.9406C2.16666 37.7145 2.31907 38.4807 2.6152 39.1956C2.91133 39.9105 3.34537 40.5601 3.89254 41.1073C4.43972 41.6545 5.08931 42.0885 5.80423 42.3846C6.51914 42.6808 7.28539 42.8332 8.05921 42.8332C8.83303 42.8332 9.59927 42.6808 10.3142 42.3846C11.0291 42.0885 11.6787 41.6545 12.2259 41.1073L15.3509 37.9823M7.01754 29.649L15.3509 37.9823"
          stroke="url(#paint0_linear)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="43.4758"
            y1="22.2414"
            x2="2.16666"
            y2="22.2414"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4B98B2" />
            <stop offset="1" stopColor="#50C879" />
          </linearGradient>
        </defs>
      </svg>
      &nbsp;Book
    </LogoWrapper>
  );
}

export default Logo;
