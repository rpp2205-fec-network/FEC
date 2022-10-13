import { render, screen, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom';
import QuestionsAnswers from './Questions&Answers.jsx';
import QuestionsList from './components/QuestionsList.jsx';

test('test runs', async () => {
    expect(1 + 1).toEqual(2)
})

test('Questions & Answers main page should render', async () => {
    render(<QuestionsAnswers />)

    await waitFor(() => screen.getByRole('heading'))

    expect(screen.getByRole('heading')).toHaveTextContent(/Questions and Answers/);
    expect(screen.getByText(/Search for answers.../)).toBeInTheDocument();

})


// test('Questions list should render', async () => {
//     render(<QuestionsList />)

//     await screen.findByRole('button' , { name: 'Add a question + '});

//     expect(screen.getByRole('button' ,{ name: "Add a question +" })).toBeInTheDocument();
// expect(screen.getByRole('input', { value: "More answered questions" })).toBeInTheDocument();
// })