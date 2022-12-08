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
    <div ref={ref} className={shown ? 'quote-container grow' : 'hidden'}>
      <h2>Here is a quote about programmin', it's lots of fun.</h2>
      <p>- Some programmer</p>
    </div>
  );
};

export default Quote;
