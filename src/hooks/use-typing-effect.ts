import { useState, useEffect, useCallback } from 'react';

interface UseTypingEffectOptions {
  text: string;
  speed?: number;
  delay?: number;
  enabled?: boolean;
  onComplete?: () => void;
}

export const useTypingEffect = ({
  text,
  speed = 50,
  delay = 0,
  enabled = true,
  onComplete,
}: UseTypingEffectOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const reset = useCallback(() => {
    setDisplayedText('');
    setIsTyping(false);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    let currentIndex = 0;

    timeoutId = setTimeout(() => {
      setIsTyping(true);

      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
          setIsComplete(true);
          onComplete?.();
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay, enabled, onComplete, reset]);

  return { displayedText, isTyping, isComplete, reset };
};
