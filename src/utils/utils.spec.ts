import { addHyphensToFillUnusedChar, reserseString } from '.';

describe('utils', () => {
  describe('addHyphensToFillUnusedChar', () => {
    it('should add hyphens to fill unused characters', () => {
      const input = '123';
      const maxLength = 10;
      const expected = '-------123';
      const actual = addHyphensToFillUnusedChar(input, maxLength);
      expect(actual).toEqual(expected);
    });
  });

  describe('reverseString', () => {
    it('should reverse string', () => {
      const input = '123';
      const expected = '321';
      const actual = reserseString(input);
      expect(actual).toEqual(expected);
    });
  });
});
