import { useEffect, useRef, useState } from "react";

export default function useThrottle<T>(val: T, limit: number) {
  const [throttledResult, setThrottledResult] = useState<T>(val);
  const lastRan = useRef<number>(Date.now());

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const now = Date.now();
        const elapsed = now - lastRan.current;
        if (elapsed >= limit) {
          setThrottledResult(val);
          lastRan.current = now;
        }
      },
      limit - (Date.now() - lastRan.current),
    );

    return () => {
      clearTimeout(timer);
    };
  }, [val, limit]);
  return throttledResult;
}
