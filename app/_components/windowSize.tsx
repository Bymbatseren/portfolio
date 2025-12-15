import { useState, useEffect } from 'react';
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
};

export default useWindowSize;