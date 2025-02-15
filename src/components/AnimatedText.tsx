import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        if (scrollableDivRef.current) {
          scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight;
        }
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [text, currentIndex]);

  return (
    <div className="animated-text" scroll-behavior="smooth" ref={scrollableDivRef}>
      {displayedText}
      <span className="cursor">|</span> {/* Add a cursor */}
    </div>
  );
};

export default AnimatedText;