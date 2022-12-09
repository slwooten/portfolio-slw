import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import './quote.css';

const Quote = () => {

  // intersection observer
  const [shown, setShown] = useState(false);
  const { ref, inView, entry } = useInView({
    rootMargin: '-25%',
    onChange: (inView) => {
      if (inView) {
        setShown(true);
      }
    }
  });

  return (
    <div ref={ref} className='quote-container'>
      <div className={shown ? 'quote-card grow' : 'quote-card hidden'}>
        <h2>"Life is like riding a bicycle. To keep your balance, you must keep moving."</h2>
        <p>- Albert Einstein</p>
      </div>
    </div>
  );
};

export default Quote;
