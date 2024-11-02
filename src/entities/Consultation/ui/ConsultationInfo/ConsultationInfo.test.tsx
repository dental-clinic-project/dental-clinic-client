import { render, screen } from "@testing-library/react";
import ConsultationInfo from "./ConsultationInfo";
import { useAddDateToConsultationsMutation } from "src/app/store/consultation";

jest.mock("src/app/store/consultation", () => ({
  useAddDateToConsultationsMutation: jest.fn(),
}));

const mockUseAddDateToConsultationsMutation = (isLoading, isError = false) => {
  (useAddDateToConsultationsMutation as jest.Mock).mockReturnValue([jest.fn(), { isLoading, isError }]);
};

describe("ConsultationInfo component", () => {
  it("should render ConsultationInfo component", () => {
    mockUseAddDateToConsultationsMutation(false);
    render(<ConsultationInfo consultations={["10:00", "11:00"]} id={1} date="2023-01-01" />);

    expect(screen.getByText("Click on the time for which you want to sign up")).toBeInTheDocument();
  });

  it("should render consultation button when isLoading is false", () => {
    mockUseAddDateToConsultationsMutation(false);
    render(<ConsultationInfo consultations={["10:00", "11:00"]} id={1} date="2023-01-01" />);

    expect(screen.getByText("Click on the time for which you want to sign up")).toBeInTheDocument();
    expect(screen.getByText("CONFIRM")).toBeInTheDocument();
  });

  it("should render consultation button when isLoading is true", () => {
    mockUseAddDateToConsultationsMutation(true);
    render(<ConsultationInfo consultations={["10:00", "11:00"]} id={1} date="2023-01-01" />);

    expect(screen.getByText(/PENDING.../i)).toBeInTheDocument();
  });

  it("should render consultation isError is true", () => {
    mockUseAddDateToConsultationsMutation(false, true);
    render(<ConsultationInfo consultations={["10:00", "11:00"]} id={1} date="2023-01-01" />);

    expect(screen.getByText(/Fetching data failed. Try again./i)).toBeInTheDocument();
  });
});
