import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import './quote.css';

const Quote = () => {

  // intersection observer
  const [shown, setShown] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0,
    onChange: (inView) => {
      if (inView) {
        setShown(true);
      }
    }
  });

  return (
    <div ref={ref} className='quote-container'>
      <h2 className={shown ? 'grow' : 'hidden'}>Here is a quote about programmin', it's lots of fun.</h2>
      <p className={shown ? 'grow' : 'hidden'}>- Some programmer</p>
    </div>
  );
};

export default Quote;
