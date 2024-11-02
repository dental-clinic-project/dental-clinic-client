import { render, screen } from "@testing-library/react";
import Header from "./Header";

jest.mock("src/entities", () => ({
  HeaderNavigation: () => <div data-testid="navigation" />,
}));

jest.mock("src/shared/ui", () => ({
  Button: () => <div data-testid="button" />,
  Logo: () => <div data-testid="logo" />,
}));

jest.mock("src/features/Header/utilities/makePhoneCall", () => ({
  makePhoneCall: jest.fn(),
}));

jest.mock("src/features/Header/hooks/useOpenMenu", () => ({
  useOpenMenu: jest.fn(() => ({
    isActive: false,
    toggleEvent: jest.fn(),
  })),
}));

describe("Header component", () => {
  it("should render Header component", () => {
    render(<Header />);

    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });

  it("should render components in the Header component", () => {
    render(<Header />);

    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeInTheDocument();
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });
});
