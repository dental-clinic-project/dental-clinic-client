import { render, screen } from "@testing-library/react";
import Reviews from "./Reviews";

jest.mock("src/entities", () => ({
  ReviewsList: () => <div data-testid="review">ReviewsList</div>,
}));

describe("Reviews", () => {
  it("should render", () => {
    render(<Reviews />);

    expect(screen.getByText(/Reviews from our customers/i)).toBeInTheDocument();
    expect(screen.getByTestId("review")).toBeInTheDocument();
  });
});
