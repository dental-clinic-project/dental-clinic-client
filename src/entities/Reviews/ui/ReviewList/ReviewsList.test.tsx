import { render, screen } from "@testing-library/react";
import ReviewsList from "./ReviewsList";
import { useGetReviewsQuery } from "src/app/store/reviews";

jest.mock("src/shared/ui", () => ({
  Loading: () => <div>Loading</div>,
}));

jest.mock("../Review/Review", () => ({
    Review: () => <div>Review</div>,
}));

jest.mock("src/app/store/reviews", () => ({
  useGetReviewsQuery: jest.fn(),
}));

const mockUseGetReviewsQuery = (reviews, isLoading, isError) => {
  (useGetReviewsQuery as jest.Mock).mockReturnValue({
    data: { data: { reviews } },
    isLoading,
    isError,
  });
};

describe("ReviewsList component", () => {
  it("should render ReviewsList component", () => {
    mockUseGetReviewsQuery([{ name: "name", description: "description", _id: 1 }], false, false);
    render(<ReviewsList />);

    expect(screen.getByText("Review")).toBeInTheDocument();
  });
  
  it("should render isLoading in the ReviewsList component", () => {
    mockUseGetReviewsQuery([], true, false);
    render(<ReviewsList />);

    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
  
  it("should render error in the ReviewsList component", () => {
    mockUseGetReviewsQuery([], false, true);
    render(<ReviewsList />);

    expect(screen.getByText("Failed to fetching data.")).toBeInTheDocument();
  });
});
