import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LinkButton from "./LinkButton";

describe("LinkButton component", () => {
  const renderLinkButton = (path: string, onClick: () => void) => {
    render(
      <MemoryRouter>
        <LinkButton path={path} onClick={onClick}>
          test
        </LinkButton>
      </MemoryRouter>
    );
  };

  it("should render linkButton component with 'test'", () => {
    renderLinkButton("/test", jest.fn());

    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("calls onClick function when link is clicked", () => {
    const handleClick = jest.fn();

    renderLinkButton("/test", handleClick);

    expect(screen.getByText("test")).toBeInTheDocument();

    fireEvent.click(screen.getByText("test"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
