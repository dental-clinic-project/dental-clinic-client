import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import { MemoryRouter } from "react-router-dom";

jest.mock("src/widgets", () => ({
  Header: () => <div>Header</div>,
  Footer: () => <div>Footer</div>,
  IntroForPages: () => <div>IntroForPages</div>,
}));

const renderLayout = () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
};

describe("Layout component", () => {
  it("should render Layout component", () => {
    renderLayout();

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
    expect(screen.getByText("IntroForPages")).toBeInTheDocument();
  });
});
