import React from 'react';
import QuoteCard from './QuoteCard';

function QuoteCardList({ quotes }) {
  return (
    <>
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </>
  );
}

export default QuoteCardList;
