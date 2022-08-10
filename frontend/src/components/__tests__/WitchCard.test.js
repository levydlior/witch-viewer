import {
  render,
  screen,
} from "@testing-library/react";

import WitchCard from "../WitchCard";

test('return true', ()=> {
  expect(true).toBe(true)
})


test("renders a card", () => {
  const likedWitches = [{ tokenID: 1 }, {}, {}];
  const witch = { name: 'bla', tokenID: 1, image: 'bla'}

  render(<WitchCard likedWitches={likedWitches} witch={witch} />);
  const witchCard = screen.queryAllByTestId("witchCard");
  expect(witchCard).toBeInTheDocument();
});
