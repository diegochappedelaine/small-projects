import { renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useKeyPress } from '.';

describe('useKeyPress', () => {
  it('should execute callback when right key is pressed', () => {
    const targetKey = 'a';
    const randomInput = 'b';
    const callback = jest.fn();
    renderHook(() => useKeyPress(targetKey, callback));

    userEvent.keyboard(randomInput);
    expect(callback).toHaveBeenCalledTimes(0);

    userEvent.keyboard(targetKey);
    expect(callback).toHaveBeenCalledTimes(1);

    userEvent.keyboard(targetKey);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
