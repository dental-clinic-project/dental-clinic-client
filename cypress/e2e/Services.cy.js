describe("Services page e2e", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.window().then((win) => {
      win.localStorage.setItem("token", "your-token-value");
    });
  });

  it("should have a title", () => {
    cy.visit("/services");

    cy.get("h2").should("be.visible");
  });

  it("should have a services", () => {
    cy.visit("/services");

    cy.get("[data-cy=services]").should("be.visible");
    cy.get("[data-cy=service]").should("be.visible");
  });

  it("should show loading state while fetching data", () => {
    cy.intercept("GET", "/api/v1/services", (req) => {
      req.reply((res) => {
        res.send({
          delayMs: 1000,
          body: res.body,
        });
      });
    }).as("getServices");

    cy.visit("/services");

    cy.get("[data-cy=loading]").should("be.visible");
    cy.wait("@getServices");
  });

  it("should show error message if fetching data fails", () => {
    cy.intercept("GET", "/api/v1/services", { statusCode: 500 }).as("getServices");

    cy.visit("/services");

    cy.contains("Failed to fetching data.").should("be.visible");
  });
});
