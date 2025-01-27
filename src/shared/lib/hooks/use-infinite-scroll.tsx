import { Loader } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface UseInfiniteScrollProps {
  canLoadMore: boolean;
  isLoadingMore: boolean;
  loadMore: () => void;
  loader?: () => JSX.Element;
}

const DefaultInfiniteLoadSpinner = () => (
  <Loader className="size-5 animate-spin" />
);

export const useInfiniteScroll = ({
  canLoadMore,
  isLoadingMore,
  loadMore,
  loader,
}: UseInfiniteScrollProps): { isIntersecting: boolean; triggerElement: JSX.Element } => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const LoaderComponent = loader || DefaultInfiniteLoadSpinner;

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

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && canLoadMore) {
          loadMore();
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 },
    );

    const currentTrigger = triggerRef.current;

    if (currentTrigger) {
      observerRef.current.observe(currentTrigger);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [canLoadMore, loadMore]);

  const triggerElement = isLoadingMore ? <LoaderComponent /> : <div className="h-1" ref={triggerRef} />;

  return { isIntersecting, triggerElement };
};
