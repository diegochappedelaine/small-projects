import { reserseString } from 'utils';

export const convertBinaryToDecimal = (binary: string): number => {
  const input = reserseString(binary);
  let decimal = 0;

  for (let index = 0; index < input.length; index++) {
    const digit = Number(input[index]);

    if (digit !== 1 && digit !== 0) throw new Error('Invalid input');

    decimal += digit * Math.pow(2, index);
  }

  return decimal;
};

export const getInputStatus = (
  input: string,
  maxLength: number,
): {
  isInputFull: boolean;
  isInputEmpty: boolean;
} => ({
  isInputFull: input.length === maxLength,
  isInputEmpty: input.length === 0,
});
