import { render, screen } from "@testing-library/react";
import LoginInputs from "./LoginInputs";

describe("LoginInputs component", () => {
  it("should render loginInputs component", () => {
    render(<LoginInputs />);

    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
  });
});
