import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

jest.mock("src/entities", () => ({
  MapComponent: () => <div>MapComponent</div>,
}));

jest.mock("src/shared/ui", () => ({
  SocialMedia: () => <div>SocialMedia</div>,
  Icon: () => <div>Icon</div>,
}));

describe("Footer component", () => {
  it("should render Footer component", () => {
    render(<Footer />);

    expect(screen.getByText(/contacts/i)).toBeInTheDocument();
    expect(screen.getByText(/380/i)).toBeInTheDocument();
    expect(screen.getByText(/@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/2024. dental clinic/i)).toBeInTheDocument();
  });

  it("should render icons in the Footer component", () => {
    render(<Footer />);

    expect(screen.queryAllByText(/icon/i)).toHaveLength(3);
  });
  
  it("should render social media in the Footer component", () => {
    render(<Footer />);

    expect(screen.getByText(/SocialMedia/i)).toBeInTheDocument();
  });
 
  it("should render map component in the Footer component", () => {
    render(<Footer />);

    expect(screen.getByText(/MapComponent/i)).toBeInTheDocument();
  });
});
