/**
 * Login page object — entry point for authenticated flows.
 *
 * Locators use data-test attributes only (Sauce Demo contract). They survive
 * CSS/theme refactors better than classes or XPath.
 */
class LoginPage {
  // Selector map: one place to update when the app changes test hooks
  selectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
  };

  defaultUser = {
    username: "standard_user",
    password: "secret_sauce",
  };

  visit() {
    cy.visit("/");
    return this;
  }

  fillUsername(username) {
    cy.get(this.selectors.username).clear().type(username);
    return this;
  }

  fillPassword(password) {
    cy.get(this.selectors.password).clear().type(password);
    return this;
  }

  submit() {
    cy.get(this.selectors.loginButton).click();
    return this;
  }

  login(username = this.defaultUser.username, password = this.defaultUser.password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
    return this;
  }

  assertOnPage() {
    cy.get(this.selectors.username).should("be.visible");
    cy.get(this.selectors.password).should("be.visible");
    cy.get(this.selectors.loginButton).should("be.visible");
    return this;
  }
}

export default new LoginPage();
