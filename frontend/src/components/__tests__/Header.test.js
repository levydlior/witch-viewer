import {render, screen} from '@testing-library/react'

import Header from './../Header'


test("should render a header", () => {
    render(<Header />);
    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
})