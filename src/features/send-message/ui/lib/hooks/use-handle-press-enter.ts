import { RefObject, useEffect, useRef } from 'react';

export const useHandlePressEnter = (): [RefObject<HTMLButtonElement>, RefObject<HTMLTextAreaElement>] => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handlePressEnter = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        buttonRef.current?.click();
      }
    };

    const handleRef = textAreaRef.current;

    if (handleRef) {
      handleRef.addEventListener('keydown', handlePressEnter);
    }

    return () => {
      if (handleRef) {
        handleRef.removeEventListener('keydown', handlePressEnter);
      }
    };
  }, []);

  return [buttonRef, textAreaRef];
};
