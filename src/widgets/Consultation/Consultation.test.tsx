import { render, screen } from "@testing-library/react";
import Consultation from "./Consultation";
import { useHandleChoiceDate } from "src/features/Consultation/hooks/useHandleChoiceDate";

jest.mock("src/shared/ui", () => ({
  Button: () => <div data-testid="button" />,
  Loading: () => <div data-testid="loading" />,
}));

jest.mock("src/entities", () => ({
  ConsultationInfo: () => <div data-testid="info" />,
}));

jest.mock("src/features/Consultation/hooks/useHandleChoiceDate", () => ({
  useHandleChoiceDate: jest.fn(),
}));

const mockUseHandleChoiceDate = (data, isLoading, isError) => {
  (useHandleChoiceDate as jest.Mock).mockReturnValue({
    handleClickButton: () => {},
    data,
    isLoading,
    isError,
  });
};

describe("Consultation component", () => {
  it("should render Consultation component", () => {
    mockUseHandleChoiceDate({ consultations: ["9:00", "10:00"], _id: "1", date: "2023-01-01" }, false, false);

    render(<Consultation />);

    expect(screen.getByTestId("button")).toBeInTheDocument();
    expect(screen.getByTestId("info")).toBeInTheDocument();
  });

  it("should render Loading in the Consultation component", () => {
    mockUseHandleChoiceDate({}, true, false);

    render(<Consultation />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("should render error in the Consultation component", () => {
    mockUseHandleChoiceDate({}, false, true);

    render(<Consultation />);

    expect(screen.getByText("Failed to fetching data. Try again.")).toBeInTheDocument();
  });
});
