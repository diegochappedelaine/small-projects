import { render, screen } from '@testing-library/react';
import { Link } from './link';

const children = '👻';
const href = '/';

describe('Link', () => {
  it('should render correctly', () => {
    render(<Link href={href}>{children}</Link>);

    expect(screen.getByRole('link')).toHaveTextContent(children);
    expect(screen.getByRole('link')).toHaveAttribute('href', href);
  });
});
