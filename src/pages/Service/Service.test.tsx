import { render, screen } from "@testing-library/react";
import Service from "./Service";
import { useGetServiceByIdQuery } from "src/app/store/services";

jest.mock("src/shared/ui", () => ({
  Loading: () => <div data-testid="loading" />,
}));

jest.mock("src/app/store/services", () => ({
  useGetServiceByIdQuery: jest.fn(),
}));

const mockUseGetServiceByIdQuery = (data, isLoading, isError) => {
  (useGetServiceByIdQuery as jest.Mock).mockReturnValue({
    data: {
      data,
    },
    isLoading,
    isError,
  });
};

describe("Service component", () => {
  it("should render Services component", () => {
    mockUseGetServiceByIdQuery({ description: ["description"], name: "name", image: "image" }, false, false);

    render(<Service />);

    expect(screen.getByText("description")).toBeInTheDocument();
    expect(screen.getByText("name")).toBeInTheDocument();
  });

  it("should render loading in the Services component", () => {
    mockUseGetServiceByIdQuery({}, true, false);

    render(<Service />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("should render error in the Services component", () => {
    mockUseGetServiceByIdQuery({}, false, true);

    render(<Service />);

    expect(screen.getByText("Failed to fetching data.")).toBeInTheDocument();
  });
});
