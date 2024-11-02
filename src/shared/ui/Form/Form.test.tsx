import { render, screen } from "@testing-library/react";
import Form from "./Form";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "src/app/store/store";

jest.mock("..", () => ({
  LoginInputs: () => <div data-testid="login-inputs" />,
  SignupInputs: () => <div data-testid="sign-inputs" />,
  TabsForm: () => <div data-testid="tabs" />,
}));

const renderForm = (typeForm) => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Form typeForm={typeForm} />
      </MemoryRouter>
    </Provider>
  );
};

describe("Form component", () => {
  it("should render Form component", () => {
    renderForm("login");

    expect(screen.getByTestId("form")).toBeInTheDocument();
    expect(screen.getByTestId("tabs")).toBeInTheDocument();
  });

  it("should render Form component  as a login", () => {
    renderForm("login");

    expect(screen.getByTestId("form")).toBeInTheDocument();
    expect(screen.getByTestId("tabs")).toBeInTheDocument();

    expect(screen.getByText(/log in/i)).toBeInTheDocument();
    expect(screen.getByTestId("login-inputs")).toBeInTheDocument();
  });
  
  it("should render Form component as a signup", () => {
    renderForm("signup");

    expect(screen.getByTestId("form")).toBeInTheDocument();
    expect(screen.getByTestId("tabs")).toBeInTheDocument();

    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getByText(/log in/i)).toBeInTheDocument();
    expect(screen.getByTestId("sign-inputs")).toBeInTheDocument();
  });
});
