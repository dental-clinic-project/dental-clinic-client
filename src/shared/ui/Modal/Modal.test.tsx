import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
import { Provider } from "react-redux";
import { store } from "src/app/store/store";

const renderModal = (title = "") => {
  const modalContainer = document.createElement("div");
  modalContainer.setAttribute("id", "modal");
  document.body.appendChild(modalContainer);

  render(
    <Provider store={store}>
      <Modal title={title} modalId="test">
        test
      </Modal>
    </Provider>
  );

  return modalContainer;
};

describe("Modal component", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("renders modal component", () => {
    renderModal();

    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("renders modal component with title", () => {
    renderModal("Test title!");

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByTestId("modal")).toBeInTheDocument();
    expect(screen.getByText(/Test title!/)).toBeInTheDocument();
  });

  it("sets body overflow to hidden on mount", () => {
    renderModal();

    expect(document.body.style.overflow).toBe("hidden");
  });
});
