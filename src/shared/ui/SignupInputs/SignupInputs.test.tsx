import { render, screen } from "@testing-library/react";
import SignupInputs from "./SignupInputs";

describe("SignupInputs component", () => {
  it("should render loginInputs component", () => {
    render(<SignupInputs />);

    expect(screen.getByTestId("email")).toHaveAttribute("name", "email");
    expect(screen.getByTestId("fullName")).toHaveAttribute("name", "fullName");
    expect(screen.getByTestId("password")).toHaveAttribute("name", "password");
    expect(screen.getByTestId("phone")).toHaveAttribute("name", "phone");
  });
});
