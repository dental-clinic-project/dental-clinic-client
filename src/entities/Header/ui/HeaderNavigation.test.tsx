import { render, screen } from "@testing-library/react";
import HeaderNavigation from "./HeaderNavigation";
import { MemoryRouter } from "react-router-dom";

jest.mock("src/shared/ui", () => ({
  Icon: () => <div data-testid="icon" />,
}));

const renderHeaderNavigation = (isActiveMenu) => {
  render(
    <MemoryRouter>
      <HeaderNavigation isActiveMenu={isActiveMenu} toggleMenu={() => {}} />
    </MemoryRouter>
  );
};

describe("HeaderNavigation", () => {
  it("should render HeaderNavigation", () => {
    renderHeaderNavigation(false);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render Consultation when isActiveMenu is true", () => {
    renderHeaderNavigation(true);

    expect(screen.getByText("Consultation")).toBeInTheDocument();
  });
});
