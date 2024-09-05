import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver(
  targetRef: RefObject<Element>,
  options: IntersectionObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    if (targetRef.current) {
      observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      }, options);

      observer.observe(targetRef.current);
    }

    return () => {
      if (observer && targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef, options]);

  return isIntersecting;
}
