import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reviews from './ReviewIndex.jsx';
// const server = setupServer(
//   rest.get('/reviews', (req, res, ctx) => {
//     return res(ctx.status(200))
//   })
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

describe('Ratings and Reviews', function () {
  it('should render Ratings & Reviews', async () => {
    render(<Reviews />);
    expect(screen.getByText('RATINGS & REVIEWS')).toBeDefined();
  });
});

test('test runs', async () => {
    expect(1 + 1).toEqual(2)
})