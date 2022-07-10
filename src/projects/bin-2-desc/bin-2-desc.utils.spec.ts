import { convertBinaryToDecimal } from './bin-2-desc.utils';

const invalidsInputs = ['a1', '1005'];

describe('binaryToDecimal', () => {
  it('should convert binary to decimal', () => {
    const input = '101';
    const expected = 5;
    const actual = convertBinaryToDecimal(input);
    expect(actual).toEqual(expected);
  });

  it.each(invalidsInputs)('should throw error for invalid input', (input) => {
    expect(() => convertBinaryToDecimal(input)).toThrow();
  });
});
