// import { render } from '@testing-library/react'
// import React from 'react'
// import {fireEvent, waitFor, screen} from '@testing-library/react'
// import Lists from './Lists.jsx'
// import '@testing-library/jest-dom'

// import '@testing-library/jest-dom';

// test('test runs', async () => {
//     expect(1 + 1).toEqual(2)
// })

// describe('two lists', function() {
//     it('should show two lists for recommended product and outfit', function() {
//         render(<Lists/>)
//         expect(getByLabelText('Similar Products')).toBe(true)
//     })
// })

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Lists from './Lists.jsx';
import Recommend from './Recommend.jsx';
import Outfit from './Outfit.jsx';


describe('Similar Products', function () {
  it('should render Similar Products', async () => {
    render(<Lists />);
    expect(screen.getByText('Similar Products')).toBeDefined();
  });
});

describe('Your Outfit', function () {
    it('should render Your Outfit', async () => {
      render(<Lists />);
      expect(screen.getByText('Your Outfit')).toBeDefined();
    });
});

describe('Similar Products page should be a list of items', function() {
    it('should include more than one item', async () => {
        let wrapper = mount();
        console.log(wrapper.state)
        // const component = render.create(<Recommend />)
        // let tree = component.toJSON();
        // console.log(tree)
        // expect(state.productList.length).toBeGreaterThan(0);
    })
})