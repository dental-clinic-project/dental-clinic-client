import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const renderWithRouter = (initialPath) => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Breadcrumb />
    </MemoryRouter>
  );
};

describe("Breadcrumb component", () => {
  it('should always display "Home"', () => {
    renderWithRouter("/");

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it('should display "About us" when path is "/about-us"', () => {
    renderWithRouter("/about-us");

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("/ About us")).toBeInTheDocument();
  });

  it('should display "Services" when path is "/services"', () => {
    renderWithRouter("/services");

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("/ Services")).toBeInTheDocument();
  });

  it('should display "Services / Childrens dentistry" when path is "/services/childrens-dentistry"', () => {
    renderWithRouter("/services/childrens-dentistry");

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("/ Services")).toBeInTheDocument();
    expect(screen.getByText("/ Childrens dentistry")).toBeInTheDocument();
  });

  it('should display "Services / Cosmetic dentistry" when path is "/services/cosmetic-dentistry"', () => {
    renderWithRouter("/services/cosmetic-dentistry");

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("/ Services")).toBeInTheDocument();
    expect(screen.getByText("/ Cosmetic dentistry")).toBeInTheDocument();
  });

  it('should display "Services / Ct diagnosis" when path is "/services/ct-diagnosis"', () => {
    renderWithRouter("/services/ct-diagnosis");

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("/ Services")).toBeInTheDocument();
    expect(screen.getByText("/ Ct diagnosis")).toBeInTheDocument();
  });

  it('should display "Services / Medicated sleep" when path is "/services/medicated-sleep"', () => {
    renderWithRouter("/services/medicated-sleep");

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("/ Services")).toBeInTheDocument();
    expect(screen.getByText("/ Medicated sleep")).toBeInTheDocument();
  });

  it('should display "Services / Prosthetic teeth" when path is "/services/prosthetic-teeth"', () => {
    renderWithRouter("/services/prosthetic-teeth");

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("/ Services")).toBeInTheDocument();
    expect(screen.getByText("/ Prosthetic teeth")).toBeInTheDocument();
  });

  it('should display "Services / Implantation of teeth" when path is "/services/implantation-of-teeth"', () => {
    renderWithRouter("/services/implantation-of-teeth");

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("/ Services")).toBeInTheDocument();
    expect(screen.getByText("/ Implantation of teeth")).toBeInTheDocument();
  });

  it('should display "Services / General dentistry" when path is "/services/general-dentistry"', () => {
    renderWithRouter("/services/general-dentistry");

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("/ Services")).toBeInTheDocument();
    expect(screen.getByText("/ General dentistry")).toBeInTheDocument();
  });

  it('should display "Services / Surgery and periodontology" when path is "/services/surgery-and-periodontology"', () => {
    renderWithRouter("/services/surgery-and-periodontology");

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("/ Services")).toBeInTheDocument();
    expect(screen.getByText("/ Surgery and periodontology")).toBeInTheDocument();
  });

  it('should display "Reviews" when path is "/reviews"', () => {
    renderWithRouter("/reviews");

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("/ Reviews")).toBeInTheDocument();
  });

  it('should display "Consultation" when path is "/consultation"', () => {
    renderWithRouter("/consultation");

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("/ Consultation")).toBeInTheDocument();
  });
});
