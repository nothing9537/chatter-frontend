import { useEffect, useRef } from 'react';

export function useScrollToBottom<T>(trigger: T) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      console.log('scroll');
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [trigger]);

  return (
    <div className="h-1 w-1" ref={scrollRef} />
  );
}
