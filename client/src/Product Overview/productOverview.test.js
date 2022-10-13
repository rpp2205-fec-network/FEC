import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductOverview from './productOverview.jsx';

describe('Product Overview', function () {
  it('should render Product Overview', async () => {
    render(<ProductOverview />);
    expect(screen.getByText('Product Overview')).toBeDefined();
  });
});