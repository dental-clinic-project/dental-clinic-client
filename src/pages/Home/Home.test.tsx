import { render, screen } from "@testing-library/react";
import Home from "./Home";

jest.mock("src/widgets", () => ({
  Intro: () => <div data-testid="intro">Intro component</div>,
  Services: () => <div data-testid="services">Services component</div>,
  Schedule: () => <div data-testid="schedule">Schedule component</div>,
}));

describe("Home component", () => {
  it("should render Home component", () => {
    render(<Home />);

    expect(screen.getByTestId("intro")).toBeInTheDocument();
    expect(screen.getByTestId("services")).toBeInTheDocument();
    expect(screen.getByTestId("schedule")).toBeInTheDocument();
  });
});
