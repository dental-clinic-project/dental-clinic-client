import { render, screen } from "@testing-library/react";
import ServicesPage from "./Services";

jest.mock("src/widgets", () => ({
  Services: () => <div data-testid="services">Services</div>,
  InfoBlock: () => <div data-testid="infoBlock">InfoBlock</div>,
}));

describe("ServicesPage", () => {
  it("should render ServicesPage component", () => {
    render(<ServicesPage />);

    expect(screen.getByTestId("services")).toBeInTheDocument();
    expect(screen.getByTestId("infoBlock")).toBeInTheDocument();
  });
});
