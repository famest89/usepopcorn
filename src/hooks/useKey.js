import { useEffect } from 'react';

export const useKey = (key, action) => {
  useEffect(() => {
    const callback = (event) => {
      if (event.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener('keydown', callback);

    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, [key]);
};
