import { useMemo, useState } from 'react';
import { useKeyPress, useNotification } from 'hooks';
import throttle from 'lodash/throttle';
import { MAXIMUM_NUMBER_OF_BINS as maxBins } from './bin-2-desc.constants';

interface UseBinaryInputs {
  binary: string;
}

export const useBinaryInputs = (): UseBinaryInputs => {
  const { displayErrorNotification } = useNotification();
  const [binary, setBinary] = useState<string>('');

  const isInputFull = binary.length === maxBins;
  const isInputEmpty = binary.length === 0;

  const errorHandler = useMemo(
    () =>
      throttle(
        () => displayErrorNotification({ description: 'Input is full.' }),
        2000,
      ),
    [displayErrorNotification],
  );

  const inputHandler = (input: string) => {
    if (isInputFull) return errorHandler();
    setBinary((currentBin) => `${currentBin}${input}`);
  };

  const backSpaceHandler = () => {
    if (!isInputEmpty) setBinary((currentBin) => currentBin.slice(0, -1));
  };

  useKeyPress('0', inputHandler);
  useKeyPress('1', inputHandler);
  useKeyPress('Backspace', backSpaceHandler);

  console.log({ binary });

  return { binary };
};
