import React, { useState, useEffect } from 'react';
import './typewriter.css';


export const Typewriter = ({speed, words, reverse }) => { 
  const [displayedWord, setDisplayedWord] = useState('');
  let wordIndex = 0;
  let charIndex = 0;
  let reversed = false;
  let isReversing = false;

  const typeWord = () => {
    if (wordIndex === words.length) {
      return;
    }
 
    const currentWord = words[wordIndex];

    if (isReversing) {
      setDisplayedWord(currentWord.slice(0, --charIndex));
      if (charIndex == 0) {
        isReversing = false;
        reversed = true;
      }
    } else {
      setDisplayedWord(currentWord.slice(0, ++charIndex));
      if (charIndex == currentWord.length && reverse && wordIndex != words.length - 1) {
        isReversing = true;
      }
    }

    if ((charIndex == currentWord.length && !reverse) || 
      (reverse && reversed && charIndex == 0) ||
      (wordIndex == words.length -1 && charIndex == currentWord.length)) {
      wordIndex++;
      charIndex = 0;
      reversed = false;
    }

    setTimeout(typeWord, isReversing ? speed/3 : speed);
  }

  useEffect(() => {
    setTimeout(typeWord, speed * 2);
  }, [words, speed])

  return (
    <h1 className='typing'>
      { displayedWord }
    </h1>
  )
}
