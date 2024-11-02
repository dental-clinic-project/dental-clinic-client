import { render, screen } from "@testing-library/react";
import InfoBlockItem from "./InfoBlockItem";

describe("InfoBlockItem component", () => {
  it("should render infoBlockItem component", () => {
    render(<InfoBlockItem name="phone-icon" title="Phone" text="+380(50)963-4476" />);

    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("+380(50)963-4476")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
