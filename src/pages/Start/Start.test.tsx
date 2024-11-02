import { render, screen } from "@testing-library/react";
import Start from "./Start";
import { Provider } from "react-redux";
import { store } from "src/app/store/store";

jest.mock("src/shared/ui", () => ({
  LinkButton: () => <div>LinkButton</div>,
  Icon: () => <div>Icon</div>,
}));

const renderWithProvider = () => {
  return render(
    <Provider store={store}>
      <Start />
    </Provider>
  );
};

describe("Start component", () => {
  it("should render start component", () => {
    renderWithProvider();

    expect(screen.getByText("You need to log in to use")).toBeInTheDocument();
    expect(screen.getByText("LinkButton")).toBeInTheDocument();
    expect(screen.queryAllByText("Icon")).toHaveLength(4);
  });
});
