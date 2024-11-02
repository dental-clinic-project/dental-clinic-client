import { render, screen } from "@testing-library/react";
import IntroForPages from "./IntroForPages";

jest.mock("src/shared/ui", () => ({
  Breadcrumb: () => <div data-testid="breadcrumb" />,
}));

describe("IntroForPages component", () => {
  it("should render IntroForPages component", () => {
    render(<IntroForPages path="/about-us" />);

    expect(screen.getByTestId("breadcrumb")).toBeInTheDocument();
  });

  it("should render IntroForPages component with title 'About us'", () => {
    render(<IntroForPages path="/about-us" />);

    expect(screen.getByTestId("breadcrumb")).toBeInTheDocument();

    expect(screen.getByText("About us")).toBeInTheDocument();
  });

  it("should render IntroForPages component with title 'Services'", () => {
    render(<IntroForPages path="/services" />);

    expect(screen.getByTestId("breadcrumb")).toBeInTheDocument();

    expect(screen.getByText("Services")).toBeInTheDocument();
  });
});
