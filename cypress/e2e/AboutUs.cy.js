describe("About us page e2e", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.window().then((win) => {
      win.localStorage.setItem("token", "your-token-value");
    });
  });

  it("should have a title", () => {
    cy.visit("/about-us");

    cy.get("h2").should("be.visible");
  });

  it("should have a team slider", () => {
    cy.visit("/about-us");

    cy.get("[data-cy=team-slider]").should("be.visible");
    cy.get("[data-cy=team-slide]").should("be.visible");
  });

  it("should show loading state while fetching data", () => {
    cy.intercept("GET", "/api/v1/team", (req) => {
      req.reply((res) => {
        res.send({
          delayMs: 1000,
          body: res.body,
        });
      });
    }).as("getTeamData");

    cy.visit("/about-us");

    cy.get("[data-cy=loading]").should("be.visible");
    cy.wait("@getTeamData");
  });

  it("should show error message if fetching data fails", () => {
    cy.intercept("GET", "/api/v1/team", { statusCode: 500 }).as("getTeamDataError");

    cy.visit("/about-us");

    cy.contains("Failed to fetching data.").should("be.visible");
  });

  it("should navigate to the next and previous slides", () => {
    cy.visit("/about-us");

    cy.get("[data-testid=teamSlide]").first().should("be.visible");
    cy.get(".swiper-button-next").click();
    cy.get("[data-testid=teamSlide]").eq(1).should("be.visible");
    cy.get(".swiper-button-next").click();
    cy.get("[data-testid=teamSlide]").eq(2).should("be.visible");
    cy.get(".swiper-button-next").click();
    cy.get("[data-testid=teamSlide]").eq(3).should("be.visible");
    cy.get(".swiper-button-prev").click();
    cy.get("[data-testid=teamSlide]").eq(2).should("be.visible");
    cy.get(".swiper-button-prev").click();
    cy.get("[data-testid=teamSlide]").eq(1).should("be.visible");
    cy.get(".swiper-button-prev").click();
    cy.get("[data-testid=teamSlide]").first().should("be.visible");
  });
});
