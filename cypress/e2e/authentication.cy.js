describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/").url().should("eq", "https://www.saucedemo.com/");
  });
  it("Login with standard user", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.getCookie("standard_user").should("exist");
  });

  it("Login with locked out user", () => {
    cy.get('[data-test="username"]').type("locked_out_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .contains("Epic sadface: Sorry, this user has been locked out.")
      .should("be.visible");
    cy.getCookie("locked_out_user").should("not.exist");
  });

  it("Login with problem user", () => {
    cy.get('[data-test="username"]').type("problem_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.getCookie("problem_user").should("exist");
  });

  it("Login with performance glitch user", () => {
    cy.get('[data-test="username"]').type("performance_glitch_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.getCookie("performance_glitch_user").should("exist");
  });

  it("Fields have not beeen completed", () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .contains("Epic sadface: Username is required")
      .should("be.visible");
  });

  it("Field 'password' has not beeen completed", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .contains("Epic sadface: Password is required")
      .should("be.visible");
  });

  it("Field 'login' has not beeen completed", () => {
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .contains("Epic sadface: Username is required")
      .should("be.visible");
  });
});
