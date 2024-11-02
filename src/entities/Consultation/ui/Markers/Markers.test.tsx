import { render, screen } from "@testing-library/react";
import Markers from "./Markers"; // Замініть на правильний шлях до вашого компонента

describe("Markers", () => {
  it("should render Markers", () => {
    render(<Markers activeTime="9:00" consultations={["10:00"]} />);

    expect(screen.getByTestId("markers")).toBeInTheDocument();
  });
});
