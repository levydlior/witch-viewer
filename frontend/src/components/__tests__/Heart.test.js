import Heart from "../Heart";
import { render, screen } from "@testing-library/react";

const renderLikeOrNot = () => {
  return true;
};

test("has a liked heart", () => {
  render(<Heart renderLikeOrNot={renderLikeOrNot} />);

  expect(screen.queryByTestId("liked-heart")).toBeInTheDocument();
});
