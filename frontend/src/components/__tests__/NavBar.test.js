import NavBar from "../NavBar";
import {render, screen} from '@testing-library/react'

test('renders a nav bar', () => {
 
    render(<NavBar />)
    const nav = screen.getByTestId('nav')
    expect(nav).toBeInTheDocument()



})