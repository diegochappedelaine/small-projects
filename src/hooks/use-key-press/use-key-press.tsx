import { useEffect, useCallback } from 'react';

type GenericCallback = (...args: any[]) => void;

export const useKeyPress = (
  targetKey: string,
  callback: GenericCallback,
): void => {
  const keyDownHandler = useCallback(
    ({ key }: KeyboardEvent): void => {
      if (key === targetKey) {
        callback(key);
      }
    },
    [callback, targetKey],
  );

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);
};
