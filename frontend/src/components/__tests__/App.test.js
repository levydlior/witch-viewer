import {render, screen} from '@testing-library/react'

import App from './../../App'


test('return false user', ()=> {

    render(<App />)
    const route = screen.queryByTestId('pop-witch-route')
    expect(route).not.toBeInTheDocument()
})

// test('true', () => {
//     expect(true).toBe(true)
// })