import { useEffect, useState } from 'react';

export default function useDebounce<T>(val: T, wait: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(val);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(val);
    }, wait);

    return () => {
      clearTimeout(timer);
    };
  }, [val, wait]);
  return debouncedValue;
}
