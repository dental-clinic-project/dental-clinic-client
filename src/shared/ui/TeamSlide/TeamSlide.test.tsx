import { render, screen } from "@testing-library/react";
import TeamSlide from "./TeamSlide";

describe("TeamSlide component", () => {
  it("render TeamSlide component", () => {
    render(
      <TeamSlide name="name" years_of_experience={1} quote="quote" position="position" imageUrl="image.png" />
    );

    expect(screen.getByTestId("teamSlide")).toBeInTheDocument();
  });

  it("render TeamSlide component with props", () => {
    render(
      <TeamSlide
        name="slide"
        years_of_experience={1}
        quote="quote"
        position="position"
        imageUrl="image.png"
      />
    );

    expect(screen.getByText("position")).toBeInTheDocument();
    expect(screen.getByText("1 years of experience")).toBeInTheDocument();
  });
});
