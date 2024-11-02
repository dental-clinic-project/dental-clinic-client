import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TabsForm from "./TabsForm";

const renderTabsForm = (typeForm: string) => {
  render(
    <MemoryRouter>
      <TabsForm typeForm={typeForm} />
    </MemoryRouter>
  );
};

describe("TabsForm component", () => {
  it("should render TabsForm component", () => {
    renderTabsForm("login");

    expect(screen.getByTestId("tabs")).toBeInTheDocument();
  });

  it("should render TabsForm component with login", () => {
    renderTabsForm("login");

    expect(screen.getByTestId("tabs")).toBeInTheDocument();
    expect(screen.getByText("Log in")).toBeInTheDocument();
  });

  it("should render TabsForm component with signup", () => {
    renderTabsForm("signup");

    expect(screen.getByTestId("tabs")).toBeInTheDocument();
    expect(screen.getByText("Sign up")).toBeInTheDocument();
  });

  it("should render TabsForm component with link", () => {
    renderTabsForm("login");
    const link = screen.getByText("Cancel");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/authentication");
  });
});
