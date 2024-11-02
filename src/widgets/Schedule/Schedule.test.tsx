import { render, screen } from "@testing-library/react";
import Schedule from "./Schedule";
import { MemoryRouter } from "react-router-dom";

const renderSchedule = () => {
  render(
    <MemoryRouter>
      <Schedule />
    </MemoryRouter>
  );
};

describe("Schedule component", () => {
  it("should render schedule component", () => {
    renderSchedule();

    expect(screen.getByText("We work from 9:00 to 18:00")).toBeInTheDocument();
    expect(screen.getByText("Schedule")).toBeInTheDocument();
  });

  it("should render link with href schedule component", () => {
    renderSchedule();
    const linkElement = screen.getByText("Consultation");

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/consultation");
  });
});
