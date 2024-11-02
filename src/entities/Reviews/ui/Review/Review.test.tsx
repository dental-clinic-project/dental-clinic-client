import { render, screen } from "@testing-library/react";
import { Review } from "./Review";

describe("Review component", () => {
  it("should render correctly", () => {
    render(<Review fullName="name" description="description" index="1" />);

    expect(screen.getByText("name")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
  });
});
