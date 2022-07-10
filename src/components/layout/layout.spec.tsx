import { render, screen } from '@testing-library/react';
import { Layout } from './layout';

describe('Layout', () => {
  it('should render succesfully with title and children', () => {
    const title = 'title';
    const children = <p>children</p>;

    render(<Layout title={title}>{children}</Layout>);
    expect(screen.getByRole('heading')).toHaveTextContent('title');
    expect(screen.queryByText('children')).toHaveTextContent('children');
  });
});
