describe("Home page e2e ", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.window().then((win) => {
      win.localStorage.setItem("token", "your-token-value");
    });
  });

  it("should have a header", () => {
    cy.visit("/");

    cy.get("header").should("be.visible");
  });

  it("should show a navigation when clicked on burger", () => {
    cy.visit("/");

    cy.get("[data-cy=burger-menu]").click();

    cy.get("[data-cy=header-navigation]").should("be.visible");
  });

  it("should handle clicked on the links in navigation", () => {
    cy.visit("/");

    cy.fixture("navigationLinks").then((data) => {
      cy.get("[data-cy=burger-menu]").click();
      cy.get("[data-cy=header-navigation]").should("be.visible");

      data.map((link) => {
        cy.contains("a", link.name).click();

        cy.get("[data-cy=header-navigation]").should("not.be.visible");

        cy.url().should("include", link.path);

        cy.visit("/");
      });
    });
  });

  it("should have a buttons on intro", () => {
    cy.visit("/");

    cy.contains("button", "About us").should("be.visible");
    cy.contains("button", "Services").scrollIntoView().should("be.visible");
    cy.contains("button", "Reviews").scrollIntoView().should("be.visible");
  });

  it("should handle navigation to pages when click", () => {
    cy.visit("/");

    cy.contains("button", "About us").click();
    cy.url().should("include", "/about-us");

    cy.visit("/");

    cy.contains("button", "Services").scrollIntoView().click();
    cy.url().should("include", "/services");

    cy.visit("/");

    cy.contains("button", "Reviews").scrollIntoView().click();
    cy.url().should("include", "/reviews");
  });

  it("should handle click on the buttons consultation", () => {
    cy.visit("/");

    cy.contains("a", "Consultation").click();
    cy.url().should("include", "/consultation");
  });
});
