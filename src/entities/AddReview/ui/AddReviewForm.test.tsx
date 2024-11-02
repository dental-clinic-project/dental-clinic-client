import { render, screen } from "@testing-library/react";
import AddReviewForm from "./AddReviewForm";
import { useAddReviewsMutation } from "src/app/store/reviews";

jest.mock("src/shared/ui", () => ({
  Button: () => <div>Button</div>,
}));

jest.mock("src/app/store/reviews", () => ({
  useAddReviewsMutation: jest.fn(),
}));

const mockUseAddReviewsMutation = (isLoading, isError) => {
  (useAddReviewsMutation as jest.Mock).mockReturnValue([
    jest.fn(),
    {
      isLoading,
      isError,
    },
  ]);
};

describe("AddReviewForm component", () => {
  it("should render AddReviewForm component", () => {
    mockUseAddReviewsMutation(false, false);
    render(<AddReviewForm />);

    expect(screen.getByTestId("form")).toBeInTheDocument();
    expect(screen.getByText("Button")).toBeInTheDocument();
  });
});
