import { render, screen } from '@testing-library/react';
import { InputFixedLength } from './input-fixed-length';

describe('InputFixedLength', () => {
  it('should render correctly', () => {
    const input = '123';
    const numberOfCharacters = 10;
    const formatedInput = '-------123';

    render(
      <InputFixedLength
        value={input}
        numberOfCharacters={numberOfCharacters}
      />,
    );

    expect(screen.getByRole('list')).toHaveTextContent(formatedInput);
  });
});
