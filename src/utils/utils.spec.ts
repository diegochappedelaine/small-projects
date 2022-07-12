import { addHyphensToFillUnusedChar, reserseString } from '.';

const addHyphensToFillUnusedCharTestCases = [
  { input: '123', maxLength: 3, output: '123' },
  { input: '123', maxLength: 10, output: '-------123' },
  { input: '', maxLength: 10, output: '----------' },
];
const reverseStringTestCases = [
  { input: '123', output: '321' },
  { input: '', output: '' },
  { input: 'abc', output: 'cba' },
];

describe('utils', () => {
  describe('addHyphensToFillUnusedChar', () => {
    it.each(addHyphensToFillUnusedCharTestCases)(
      'should add hyphens to fill unused char',
      ({ input, maxLength, output }) => {
        const actual = addHyphensToFillUnusedChar(input, maxLength);
        expect(actual).toEqual(output);
      },
    );
  });

  describe('reverseString', () => {
    it.each(reverseStringTestCases)(
      'should reverse string',
      ({ input, output }) => {
        const actual = reserseString(input);
        expect(actual).toEqual(output);
      },
    );
  });
});
