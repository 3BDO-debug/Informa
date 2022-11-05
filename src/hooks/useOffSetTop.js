import { useState, useEffect } from 'react';

// ----------------------------------------------------------------------

export default function useOffSetTop(top) {
  const [offsetTop, setOffSetTop] = useState(false);
  const isTop = top || 100;

  useEffect(() => {
    const options = { passive: true }; // options must match add/remove event
    const scroll = (event) => {
      const { pageYOffset, scrollY } = window;
      if (scrollY > isTop) {
        setOffSetTop(true);
      } else {
        setOffSetTop(false);
      }
    };
    document.addEventListener('scroll', scroll, options);
    // remove event on unmount to prevent a memory leak
    () => document.removeEventListener('scroll', scroll, options);
  }, []);

  return offsetTop;
}

// Usage
// const offset = useOffSetTop(100);
