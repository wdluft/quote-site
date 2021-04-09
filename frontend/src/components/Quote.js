import React from 'react';
import styled from 'styled-components';
import { ImQuotesLeft } from '@react-icons/all-files/im/ImQuotesLeft';
import { ImQuotesRight } from '@react-icons/all-files/im/ImQuotesRight';

const QuoteWrapper = styled.article`
  background-color: var(--white);
  color: var(--whySoGrey);
  position: relative;
  box-shadow: var(--mdShadow);
  padding: 1rem;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    background-image: var(--gradient);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    transform: rotate(6deg);
  }

  .quote-left {
    fill: var(--primary);
  }
  .quote-right {
    fill: var(--secondary);
  }
`;

function Quote() {
  return (
    <QuoteWrapper>
      <blockquote>
        <ImQuotesLeft className="quote-left" />
        The fruit of this life is a good character and acts for the common good.
        <ImQuotesRight className="quote-right" />
      </blockquote>
      <p>-Marcus Aurelius</p>
    </QuoteWrapper>
  );
}

export default Quote;
