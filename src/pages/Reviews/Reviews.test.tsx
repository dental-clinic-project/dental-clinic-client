import { render, screen } from "@testing-library/react";
import Reviews from "./Reviews";

jest.mock("src/widgets", () => ({
  AddReview: () => <div data-testid="addReview">AddReview component</div>,
  Reviews: () => <div data-testid="reviews">Reviews component</div>,

}));

describe("Reviews component", () => {
  it("should render Home component", () => {
    render(<Reviews />);

    expect(screen.getByTestId("addReview")).toBeInTheDocument();
    expect(screen.getByTestId("reviews")).toBeInTheDocument();
  });
});
