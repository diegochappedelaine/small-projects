import { useState } from 'react';
import { useKeyPress, useNotification } from 'hooks';
import { MAXIMUM_NUMBER_OF_BINS as maxBins } from './bin-2-desc.constants';
import { getInputStatus } from './bin-2-desc.utils';

interface UseBinaryInputs {
  binary: string;
}

export const useBinaryInputs = (): UseBinaryInputs => {
  const { displayErrorNotification } = useNotification();
  const [binary, setBinary] = useState<string>('');

  const { isInputFull, isInputEmpty } = getInputStatus(binary, maxBins);

  const inputHandler = (input: string) => {
    if (isInputFull) {
      return displayErrorNotification({ description: 'Input is full.' });
    }
    setBinary((currentBin) => `${currentBin}${input}`);
  };

  const backSpaceHandler = () => {
    if (!isInputEmpty) setBinary((currentBin) => currentBin.slice(0, -1));
  };

  useKeyPress('0', inputHandler);
  useKeyPress('1', inputHandler);
  useKeyPress('Backspace', backSpaceHandler);

  return { binary };
};
