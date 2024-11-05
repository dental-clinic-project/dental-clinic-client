describe("Auth page e2e", () => {
  it("should have a title", () => {
    cy.visit("/authentication");

    cy.contains("You need to log in to use").should("be.visible");
  });

  it("should handle click a button", () => {
    cy.visit("/authentication");

    cy.contains("Sign up").click();
    cy.get("[data-cy=modal]").should("be.visible");
    cy.contains("Cancel").click();
  });
  
  it("should handle click a button log in", () => {
    cy.visit("/authentication");

    cy.contains("Sign up").click();
    cy.get("[data-cy=modal]").should("be.visible");
    cy.contains("Log in").click();
    cy.contains("Cancel").click();
  });
});
