import { render, screen } from "@testing-library/react";
import ConsultationPage from "./Consultation";

jest.mock("src/widgets", () => ({
  Consultation: () => <div data-testid="consultation" />,
}));

describe("Consultation component", () => {
  it("should render Consultation component", () => {
    render(<ConsultationPage />);

    expect(screen.getByTestId("consultation")).toBeInTheDocument();
  });
});
