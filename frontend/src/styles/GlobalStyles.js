import styled, { createGlobalStyle } from 'styled-components';
import '@fontsource/spectral';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --black: hsl(420, 69%, 0%);
    --white: hsl(420, 69%, 100%);

    --green: hsl(140, 52%, 55%);
    --superLightGreen: hsl(141, 66%, 80%);
    --lightGreen: hsl(140, 59%, 67%);
    --darkGreen: hsl(140, 57%, 45%);
    --superDarkGreen: hsl(140, 81%, 35%);

    --orange: hsl(31, 100%, 70%);
    --superLightOrange: hsl(31, 100%, 86%);
    --lightOrange: hsl(31, 100%, 77%);
    --darkOrange: hsl(31, 91%, 62%);
    --superDarkOrange: hsl(31, 81%, 48%);

    --blue: hsl(195, 41%, 50%);
    --superLightBlue: hsl(194, 57%, 78%);
    --lightBlue: hsl(195, 48%, 63%);
    --darkBlue: hsl(195, 53%, 39%);
    --superDarkBlue: hsl(195, 76%, 31%);

    --whySoGrey: hsl(209, 15%, 15%);
    --superDarkGrey: hsl(209, 15%, 28%);
    --darkGrey: hsl(207, 12%, 43%);
    --grey: hsl(208, 12%, 58%);
    --lightGrey: hsl(210, 16%, 76%);
    --superLightGrey: hsl(208, 21%, 88%);

    /* TYPOGRAPHY */
    --superBigText: 5rem;
    --h1: 4.209rem;
    --h2: 3.157rem;
    --h3: 2.369rem;
    --h4: 1.777rem;
    --h5: 1.333rem;
    --baseFontSize: 1rem;
    --smallText: 0.75rem;

    /* ELEVATION */
    --xsShadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    --smShadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    --baseShadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15),
      0 1px 2px 0 rgba(0, 0, 0, 0.11);
    --mdShadow: 0 4px 6px -1px rgba(0, 0, 0, 0.15),
      0 2px 4px -1px rgba(0, 0, 0, 0.11);
    --lgShadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15),
      0 4px 6px -2px rgba(0, 0, 0, 0.1);
    --xlShadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15),
      0 10px 10px -5px rgba(0, 0, 0, 0.09);
    --xxlShadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
    --innerShadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.11);

    /* SPACING */
    --maxWidth: 69rem;
    --xPadding: 1.5rem;
  }

  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    --bgColor: var(--whySoGrey);
    --textColor: var(--white);
    --primary: var(--green);
    --secondary: var(--blue);
    --gradient: linear-gradient(to right, #50c879, #00bf98, #00b4ad, #11a7b6, #4b98b2);

    background-color: var(--bgColor);
    color: var(--textColor);
    font-family: Spectral, Cambria, Cochin, Georgia, Times, 'Times New Roman',
      serif;
    font-weight: 400;
    line-height: 1.75;
  }

  :is(h1, h2, h3, h4, h5) {
    font-family: Spectral, Cambria, Cochin, Georgia, Times, 'Times New Roman',
      serif;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
  }

  /* TODO: add line-heights for headings */
  h1 {
    font-size: var(--h3);
  }
  h2 {
    font-size: var(--h3);
  }
  h3 {
    font-size: var(--h4);
  }
  h4 {
    font-size: var(--h5);
  }
  h5 {
    font-size: var(--h5);
  }

  small,
  .text_small {
    font-size: var(--smallText);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 0.75rem;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--whySoGrey);
  }
  body::-webkit-scrollbar-track {
    background: var(--whySoGrey);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    background-image: var(--primary);
    border-radius: 6px;
    border: 3px solid var(--whySoGrey);
  }

  @media screen and (min-width: 40rem) {
    h1 {
    font-size: var(--h1);
  }
  h2 {
    font-size: var(--h2);
  }
  h3 {
    font-size: var(--h3);
  }
  h4 {
    font-size: var(--h4);
  }
  h5 {
    font-size: var(--h5);
  }
  }
`;

export default GlobalStyle;
