import { render, screen } from "@testing-library/react";
import InfoBlock from "./InfoBlock";

jest.mock("src/shared/ui", () => ({
  InfoBlockItem: () => <div>Info</div>,
}));

describe("InfoBlock component", () => {
  it("render InfoBlockItem component", () => {
    render(<InfoBlock />);

    expect(screen.getByText(/affordability for perfect dental care/i)).toBeInTheDocument();
  });

  it("render InfoBlockItem in the InfoBlockItem component", () => {
    render(<InfoBlock />);

    expect(screen.getByText(/affordability for perfect dental care/i)).toBeInTheDocument();

    expect(screen.queryAllByText("Info")).toHaveLength(2);
  });
});
