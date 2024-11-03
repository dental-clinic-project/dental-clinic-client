describe("Reviews us page e2e", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.window().then((win) => {
      win.localStorage.setItem("token", "your-token-value");
    });
  });

  it("should have a title", () => {
    cy.visit("/reviews");

    cy.get("h2").should("be.visible");
  });

  it("should have a reviews", () => {
    cy.visit("/reviews");

    cy.get("[data-cy=reviews]").should("be.visible");
    cy.get("[data-cy=review]").should("be.visible");
  });

  it("should show loading state while fetching data", () => {
    cy.intercept("GET", "/api/v1/reviews", (req) => {
      req.reply((res) => {
        res.send({
          delayMs: 1000,
          body: res.body,
        });
      });
    }).as("getReviews");

    cy.visit("/reviews");

    cy.get("[data-cy=loading]").should("be.visible");
    cy.wait("@getReviews");
  });

  it("should show error message if fetching data fails", () => {
    cy.intercept("GET", "/api/v1/reviews", { statusCode: 500 }).as("getReviews");

    cy.visit("/reviews");

    cy.contains("Failed to fetching data.").should("be.visible");
  });

  it.only("should disable the button and show loading state when submitting", () => {
    cy.visit("/reviews");

    cy.intercept("POST", "/api/v1/reviews", {
      statusCode: 200,
      body: { message: "Review submitted successfully!" },
    }).as("submitReview");

    cy.get('textarea[placeholder="Add your review..."]').type(
      "I had my teeth whitened here, and the results are fantastic! The process was quick, and the dentist explained everything beforehand. My smile looks better than ever, and I’ve received so many compliments. I would recommend this clinic to anyone looking for professional and efficient dental services."
    );

    cy.get("button").contains("SEND").click();

    cy.get('textarea[placeholder="Add your review..."]').should("have.value", "");
  });
});
