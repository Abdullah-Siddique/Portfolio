import React, { useState, useEffect } from 'react';

const TextBox = () => {
  const texts = [
    'Welcome!',
    'This',
    'is',
    'Abdullah',
    'Siddique,',
    'a',
    'programmer💻,',

    'a',
    'science enthusiast🔬,',


    'and',
    'a',
    'blogger✍️.',

  ];

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < texts.length) {
        setDisplayedText((prevText) => prevText + ' ' + texts[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 800); // Adjust the delay time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [texts, currentIndex]);

  return (
    <div className="text-box" style={{ textAlign: 'center', fontSize: '1.5rem' }}>
      <p style={{ fontSize: '1.6rem' }}>{displayedText}</p>
    </div>
  );
};

export default TextBox;



