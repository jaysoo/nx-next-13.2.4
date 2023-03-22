import { render } from '@testing-library/react';

import Ui1 from './ui1';

describe('Ui1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui1 />);
    expect(baseElement).toBeTruthy();
  });
});
