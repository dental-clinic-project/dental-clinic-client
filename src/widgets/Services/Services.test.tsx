import { render, screen } from "@testing-library/react";
import Services from "./Services";
import { useGetServicesQuery } from "src/app/store/services";
import { servicesData } from "./mocks";

jest.mock("src/shared/ui", () => ({
  Service: () => <div data-testid="service">Service</div>,
  Loading: () => <div data-testid="loading">Loading</div>,
}));

jest.mock("src/app/store/services", () => ({
  useGetServicesQuery: jest.fn(),
}));

const mockuseGetServicesQuery = (services, isLoading, isError) => {
  (useGetServicesQuery as jest.Mock).mockReturnValue({
    data: {
      data: {
        services,
      },
    },
    isLoading,
    isError,
  });
};

describe("Services component", () => {
  it("should render Services component", () => {
    mockuseGetServicesQuery(servicesData, false, false);
    render(<Services />);

    expect(screen.getByText("Services offered by our clinic")).toBeInTheDocument();
  });

  it("should render Service in the Services component", () => {
    mockuseGetServicesQuery(servicesData, false, false);
    render(<Services />);

    expect(screen.getByTestId("service")).toBeInTheDocument();
  });

  it("should render Loading in the Services component", () => {
    mockuseGetServicesQuery([], true, false);
    render(<Services />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("should render error in the Services component", () => {
    mockuseGetServicesQuery([], false, true);
    render(<Services />);

    expect(screen.getByText(/failed to fetching data/i)).toBeInTheDocument();
  });
});
