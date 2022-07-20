export class Auth {
  login(login, password) {
    this.#getUsername.type(login);
    this.#getPassword.type(password);
    this.#getLoginButton().click();
  }

  fillUsername(string) {
    this.#getUsername().type(string);
  }

  fillPassword(string) {
    this.#getPassword().type(string);
  }

  clickLoginButton() {
    this.#getLoginButton();
    return this;
  }

  verifyCookie(assertion) {
    cy.getCookie("session-username").should(assertion);
  }

  #getUsername() {
    return cy.get("#user-name");
  }

  #getPassword() {
    return cy.get("#password");
  }

  #getLoginButton() {
    return cy.get("#login-button").click();
  }

  #getCookie() {
    return cy.getCookie();
  }
}
export default Auth;
