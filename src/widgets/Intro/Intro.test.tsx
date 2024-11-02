import { render, screen } from "@testing-library/react";
import { Intro } from "./Intro";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="swiper-testid">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="swiper-slide-testid">{children}</div>,
}));

jest.mock("swiper/modules", () => ({
  Autoplay: () => null,
}));

jest.mock("src/entities/Intro/ui/IntroSlide", () => {
  return ({ title, btnText }) => (
    <div>
      <h2>{title}</h2>
      <button>{btnText}</button>
    </div>
  );
});

describe("Intro component", () => {
  it("renders all IntroSlides", () => {
    render(<Intro />);

    expect(screen.getByText("Our doctors are professionals")).toBeInTheDocument();
    expect(screen.getByText("We use only modern medicine")).toBeInTheDocument();
    expect(screen.getByText("Our patients are always satisfied")).toBeInTheDocument();
  });

  it("renders buttons for each IntroSlide", () => {
    render(<Intro />);

    expect(screen.getByText("About us")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Reviews")).toBeInTheDocument();
  });
});
