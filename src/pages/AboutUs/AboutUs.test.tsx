import { render, screen } from "@testing-library/react";
import AboutUs from "./AboutUs";

jest.mock("src/widgets", () => ({
  Schedule: () => <div data-testid="schedule">Schedule component</div>,
  Team: () => <div data-testid="team">Team component</div>,
}));

describe("AboutUs component", () => {
  it("should render Home component", () => {
    render(<AboutUs />);

    expect(screen.getByTestId("schedule")).toBeInTheDocument();
    expect(screen.getByTestId("team")).toBeInTheDocument();
  });
});
