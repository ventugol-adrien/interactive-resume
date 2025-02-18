import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const currentIndexRef = useRef(0);
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Text changed. Resetting index and displayed text.")
    const textArray = text.split('');
    currentIndexRef.current = 0;
    setDisplayedText(textArray[currentIndexRef.current]);

    const appendText = () =>{
      if (currentIndexRef.current < textArray.length-1) {
        console.log("Appending text:", currentIndexRef.current, textArray.length, textArray[currentIndexRef.current], currentIndexRef.current+1)
        setDisplayedText((prev) => prev + textArray[currentIndexRef.current]);
        currentIndexRef.current += 1;
        if (scrollableDivRef.current) {
          scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight;
        }
      }
    }
    if (currentIndexRef.current < textArray.length) {
      console.log("There is text left. appending...", currentIndexRef.current, textArray.length)
      const interval = setInterval(appendText, 20);
      return () => clearInterval(interval);
  } else {
    console.log("No text left.")
    return
  }
    
    
  }, [text]);

  return (
    <div className="animated-text" scroll-behavior="smooth" ref={scrollableDivRef}>
      {displayedText}
      <span className="cursor">|</span> {/* Add a cursor */}
    </div>
  );
};

export default AnimatedText;