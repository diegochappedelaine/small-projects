import { convertBinaryToDecimal, getInputStatus } from './bin-2-desc.utils';

const binariesToDecimals = [
  { input: '0', output: 0 },
  { input: '101', output: 5 },
  { input: '1101', output: 13 },
  { input: '101011', output: 43 },
  { input: '11111111', output: 255 },
];
const invalidsConvertBinaryToDecimalInputs = ['a1', '1005'];
const getInputStatusTestCases = [
  {
    input: { value: '', maxLength: 3 },
    output: { isInputFull: false, isInputEmpty: true },
  },
  {
    input: { value: '10', maxLength: 3 },
    output: { isInputFull: false, isInputEmpty: false },
  },
  {
    input: { value: '101', maxLength: 3 },
    output: { isInputFull: true, isInputEmpty: false },
  },
];

describe('binary to decimal utils', () => {
  describe('convertBinaryToDecimal', () => {
    it.each(binariesToDecimals)(
      'should convert binary to decimal',
      ({ input, output }) => {
        const actual = convertBinaryToDecimal(input);
        expect(actual).toEqual(output);
      },
    );

    it.each(invalidsConvertBinaryToDecimalInputs)(
      'should throw error for invalid input',
      (input) => {
        expect(() => convertBinaryToDecimal(input)).toThrow();
      },
    );
  });
  describe('getInputStatus', () => {
    it.each(getInputStatusTestCases)(
      'should return input status',
      ({ input, output }) => {
        const { value, maxLength } = input;

        const actual = getInputStatus(value, maxLength);
        expect(actual).toEqual(output);
      },
    );
  });
});
