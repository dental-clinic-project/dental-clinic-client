import { render, screen } from "@testing-library/react";
import { useGetTeamQuery } from "src/app/store/team";
import TeamSlider from "./TeamSlider";
import "@testing-library/jest-dom";

jest.mock("src/app/store/team");

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div>{children}</div>,
  SwiperSlide: ({ children }) => <div>{children}</div>,
}));

jest.mock("swiper/modules", () => ({
  Navigation: () => null,
  Mousewheel: () => null,
  Keyboard: () => null,
}));

jest.mock("src/shared/ui", () => ({
  TeamSlide: () => <div>TeamSlide component</div>,
  Loading: () => <div>Loading...</div>,
}));

const mockUseGetTeamQuery = (data, isError, isLoading) => {
  (useGetTeamQuery as jest.Mock).mockReturnValue({
    data: {
      data: {
        team: data,
      },
    },
    isError,
    isLoading,
  });
};

describe("TeamSlider Component", () => {
  it("renders TeamSlider with TeamSlide components", () => {
    mockUseGetTeamQuery(
      [
        {
          name: "John Doe",
          years_of_experience: 5,
          position: "dentist",
          quote: "I love you!",
          imageUrl: "image1",
          _id: 1,
        },
      ],
      false,
      false
    );
    render(<TeamSlider />);

    expect(screen.getByText("TeamSlide component")).toBeInTheDocument();
  });

  it("renders loading state when isLoading is true", () => {
    mockUseGetTeamQuery([], false, true);
    render(<TeamSlider />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
  
  it("renders error state when isError is true", () => {
    mockUseGetTeamQuery([], true, false);
    render(<TeamSlider />);

    expect(screen.getByText(/failed to fetching data./i)).toBeInTheDocument();
  });
});
