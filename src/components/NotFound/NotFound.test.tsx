import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('notfound', () => {
  it('renders NotFound component properly', () => {
    render(<NotFound />);
    const notfound = screen.getByTestId('notfound');
    expect(notfound).toBeInTheDocument();
  });
});
