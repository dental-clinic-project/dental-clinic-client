import { render, screen } from "@testing-library/react";
import SocialMedia from "./SocialMedia";

describe("SocialMedia component", () => {
  it("should render SocialMedia component", () => {
    render(<SocialMedia />);

    expect(screen.getByTestId("socialMedia")).toBeInTheDocument();
  });

  it("should render links in SocialMedia component", () => {
    render(<SocialMedia />);

    const instagram = screen.getByTestId("instagram");
    const facebook = screen.getByTestId("facebook");

    expect(instagram).toHaveAttribute("href", "https://www.instagram.com/tm_dentalway/");
    expect(facebook).toHaveAttribute("href", "https://www.facebook.com/");
  });
});
