import { render, screen } from "@testing-library/react";
import Team from "./Team";

jest.mock("src/entities", () => ({
  TeamSlider: () => <div data-testid="team-slider" />,
}));

describe("Team", () => {
  it("should render Team component", () => {
    render(<Team />);

    expect(screen.getByText("Our team")).toBeInTheDocument();
    expect(screen.getByTestId("team-slider")).toBeInTheDocument();
  });
});
