import { render, screen } from "@testing-library/react";
import ReviewSocialMedia from "./ReviewSocialMedia";
import { MemoryRouter } from "react-router-dom";

const renderReviewSocialMedia = () => {
  render(
    <MemoryRouter>
      <ReviewSocialMedia />
    </MemoryRouter>
  );
};

describe("ReviewSocialMedia component", () => {
  it("should render ReviewSocialMedia component", () => {
    renderReviewSocialMedia();

    expect(screen.getByTestId("reviewSocialMedia")).toBeInTheDocument();
  });

  it('should render links in ReviewSocialMedia component', () => {
    renderReviewSocialMedia();

    const instagram = screen.getByRole("link", { name: "instagram" });
    const email = screen.getByRole("link", { name: "email" });
    const facebook = screen.getByRole("link", { name: "facebook" });

    expect(instagram).toHaveAttribute("href", "https://www.instagram.com/tm_dentalway/");
    expect(email).toHaveAttribute("href", "mailto:matveevdenis458@gmail.com");
    expect(facebook).toHaveAttribute("href", "https://www.facebook.com");
  });
});
