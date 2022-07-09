import { render } from '@testing-library/react';
import Bin2DescPage from './index';

describe('Bin2DescPage', () => {
  it('should render correctly', () => {
    const { container } = render(<Bin2DescPage />);
    expect(container).toMatchSnapshot();
  });
});
