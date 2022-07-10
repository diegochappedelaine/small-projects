export const addHyphensToFillUnusedChar = (
  input: string,
  maxLength: number,
): string => {
  const inputLength = input.length;
  const hyphenCount = maxLength - inputLength;
  return `${'-'.repeat(hyphenCount)}${input}`;
};

export const reserseString = (input: string): string =>
  input.split('').reverse().join('');
