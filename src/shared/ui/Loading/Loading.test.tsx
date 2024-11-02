import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading component", () => {
  it("render loading component", () => {
    render(<Loading />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
