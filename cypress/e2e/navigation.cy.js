describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/").url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.getCookie("session-username").should("exist");
  });

  it("Resetting the app state", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get("#react-burger-menu-btn").click();
    cy.get("#reset_sidebar_link").click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });

  it("Left sidebar", () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#about_sidebar_link").should(
      "have.attr",
      "href",
      "https://saucelabs.com/"
    );
  });

  it("Back from product to list", () => {
    cy.get("#item_4_title_link > .inventory_item_name").click();
    cy.get('[data-test="back-to-products"]').click();
    cy.get(".inventory_container").should("be.visible");
  });

  it("Cart", () => {
    cy.get(".shopping_cart_link").click();
    cy.get(".title").should("be.visible");
  });

  it("Social media", () => {
    cy.get(".social_linkedin")
      .children()
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/company/sauce-labs/"
      );
  });
});
