import { render, screen } from "@testing-library/react";
import Service from "./Service";
import { MemoryRouter } from "react-router-dom";

const renderService = (description: string, service: string, path: string, index: number) => {
  render(
    <MemoryRouter>
      <Service description={description} service={service} path={path} index={index} />
    </MemoryRouter>
  );
};

describe("Service component", () => {
  it("should render Service component", () => {
    renderService("Test description", "Test service", "/test", 1);

    expect(screen.getByTestId('Test service')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Test service')).toBeInTheDocument();
    expect(screen.getByText('+ more details')).toBeInTheDocument();
  });
});

