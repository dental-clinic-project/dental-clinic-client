import { render, screen } from "@testing-library/react";
import AddReview from "./AddReview";

jest.mock("src/shared/ui", () => ({
  ReviewSocialMedia: () => <div data-testid="reviewSocialMedia" />,
}));

jest.mock("src/entities", () => ({
  AddReviewFrom: () => <div data-testid="addReviewFrom" />,
}));

describe("AddReview component", () => {
  it("should render AddReview component", () => {
    render(<AddReview />);

    expect(screen.getByText(/your feedback is very important for our development/i)).toBeInTheDocument();
  });
 
  it("should render ReviewSocialMedia and  AddReviewFrom in the AddReview component", () => {
    render(<AddReview />);

    expect(screen.getByText(/your feedback is very important for our development/i)).toBeInTheDocument();

    expect(screen.getByTestId("reviewSocialMedia")).toBeInTheDocument();
    expect(screen.getByTestId("addReviewFrom")).toBeInTheDocument();
  });
});
