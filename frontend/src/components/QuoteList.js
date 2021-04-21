import React from 'react';
import QuoteLine from './QuoteLine';

function QuoteList({ quotes }) {
  return (
    <>
      {quotes.map((quote) => (
        <QuoteLine quote={quote} />
      ))}
    </>
  );
}

export default QuoteList;
