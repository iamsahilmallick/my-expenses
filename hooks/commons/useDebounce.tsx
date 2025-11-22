import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useDebouncedArray(values: string[], delay: number): string[] {
  const [debounced, setDebounced] = useState(values);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(values);
    }, delay);
    return () => clearTimeout(handler);
  }, [values.join('|'), delay]);

  return debounced;
}
