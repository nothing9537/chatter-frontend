import { useEffect, useRef } from 'react';

export function useScrollToElement<T>(trigger: T, shouldScroll = true) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current && shouldScroll) {
      scrollRef.current.scrollIntoView({ behavior: 'instant' });
    }
  }, [trigger, shouldScroll]);

  return { ref: scrollRef, element: <div className="h-1 w-1" ref={scrollRef} /> };
}
