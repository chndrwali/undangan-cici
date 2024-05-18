import { useState, useEffect } from 'react';

const useCountUp = (end: number, duration: number, key: string): number => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(0); // Reset count on key change

    let start = 0;
    const incrementTime = (duration / end) * 1000;

    const step = () => {
      start += 1;
      setCount(start);
      if (start < end) {
        setTimeout(step, incrementTime);
      }
    };

    step();
  }, [end, duration, key]);

  return count;
};

export default useCountUp;
