import React from 'react';
import Quote from './Quote';

function QuoteList({ quotes }) {
  return (
    <>
      {quotes.map((quote) => (
        <Quote key={quote.id} quote={quote} />
      ))}
    </>
  );
}

export default QuoteList;
