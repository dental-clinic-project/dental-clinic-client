import { render, screen } from "@testing-library/react";
import Authentication from "./Authentication";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "src/app/store/store";

jest.mock("src/shared/ui", () => ({
  Form: () => <div data-testid="form" />,
  Modal: () => <div data-testid="modal" />,
}));

jest.mock("..", () => ({
  Start: () => <div data-testid="start" />,
}));

const renderAuthentication = () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Authentication />
      </MemoryRouter>
    </Provider>
  );
};

describe("Authentication component", () => {
  it("should render authentication component", () => {
    renderAuthentication();

    expect(screen.getByTestId("start")).toBeInTheDocument();
  });
});
