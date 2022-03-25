import {
  useState,
  useCallback,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react';

export const useInfinateScrolling = ({
  isLoading,
  hasMore,
  setPage,
}: {
  isLoading: boolean;
  hasMore: boolean;
  setPage: Dispatch<SetStateAction<number>>
}) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const ref = useCallback((node) => {
    if (!node || isLoading || !hasMore) return;

    observer.current?.disconnect();
    observer.current = new IntersectionObserver(([ element ]) => {
      if (element.isIntersecting) {
        setPage((i) => i + 1);
      }
    });
    observer.current.observe(node);

  }, [ isLoading, hasMore, setPage ]);

  return ref;
}