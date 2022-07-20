import { Auth } from "../PageObject/Authentication";

describe("Authentication", () => {
  const auth = new Auth();

  beforeEach(() => {
    cy.visit("/").url().should("eq", "https://www.saucedemo.com/");
  });

  it("Login with standard user", () => {
    auth.fillUsername("standard_user");
    auth.fillPassword("secret_sauce");
    auth.clickLoginButton();
    auth.verifyCookie("exist");
  });

  it("Login with locked out user", () => {
    auth.fillUsername("locked_user");
    auth.fillPassword("secret_sauce");
    auth.clickLoginButton();
    auth.verifyCookie("not.exist");
  });

  it("Login with problem user", () => {
    auth.fillUsername("problem_user");
    auth.fillPassword("secret_sauce");
    auth.clickLoginButton();
    auth.verifyCookie("exist");
  });

  it("Login with performance glitch user", () => {
    auth.fillUsername("performance_glitch_user");
    auth.fillPassword("secret_sauce");
    auth.clickLoginButton();
    auth.verifyCookie("exist");
  });

  it("Fields have not beeen completed", () => {
    auth.clickLoginButton();
    auth.verifyCookie("not.exist");
  });

  it("Field 'password' has not beeen completed", () => {
    auth.fillUsername("standard_user");
    auth.clickLoginButton();
    auth.verifyCookie("not.exist");
  });

  it("Field 'login' has not beeen completed", () => {
    auth.fillPassword("secret_sauce");
    auth.clickLoginButton();
    auth.verifyCookie("not.exist");
  });
});
