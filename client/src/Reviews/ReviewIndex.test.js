import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reviews from './ReviewIndex.jsx';

describe('Ratings and Reviews - main component', function () {
  it('should render Ratings & Reviews', async () => {
    render(<Reviews />);
    expect(screen.getByText('RATINGS & REVIEWS')).toBeDefined();
  });
});
