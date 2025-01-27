import { Loader } from 'lucide-react';
import { FC, useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  children: React.ReactNode;
  canLoadMore: boolean;
  isLoadingMore: boolean;
  loadMore: () => void;
  triggerPosition?: 'aboveChild' | 'belowChild';
  loader?: () => React.JSX.Element;
}

const InfiniteLoadSpinner = () => (
  <div className="w-full h-fit flex items-center justify-center">
    <Loader className="size-5 animate-spin" />
  </div>
);

export const InfiniteScroll: FC<InfiniteScrollProps> = ({ children, canLoadMore, isLoadingMore, loadMore, triggerPosition = 'aboveChild', loader }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const Loader = loader || InfiniteLoadSpinner;

  useEffect(() => {
    if (!canLoadMore) {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      return;
    }

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && canLoadMore) {
        loadMore();
      }
    }, { root: null, rootMargin: '0px', threshold: 0.1 });

    const currentTrigger = triggerRef.current;

    if (currentTrigger) {
      observerRef.current.observe(currentTrigger);
    }

    // eslint-disable-next-line consistent-return
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [canLoadMore, loadMore]);

  return (
    <>
      {triggerPosition === 'aboveChild' && canLoadMore && (
        <div ref={triggerRef} className="h-1" />
      )}

      {isLoadingMore && triggerPosition === 'aboveChild' && (
        <Loader />
      )}

      {children}

      {isLoadingMore && triggerPosition === 'belowChild' && (
        <Loader />
      )}

      {triggerPosition === 'belowChild' && canLoadMore && (
        <div ref={triggerRef} className="h-1" />
      )}
    </>
  );
};
