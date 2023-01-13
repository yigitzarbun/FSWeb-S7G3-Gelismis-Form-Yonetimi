import { slowCypressDown } from "cypress-slow-down";
slowCypressDown(400);

// TEST 1

// Arrange
describe("ilk testim", function () {
  // Act
  it("bişeyler yapar", function () {
    // Assert
    expect(true).to.equal(true);
  });
});

// TEST 2

// Arrange
describe("form field'ları al, doldur, submit et", function () {
  // Act
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Visits my form site", function () {
    // Assert
    cy.get('[data-cy="submit-button"]').should("be.disabled");
    cy.get('[data-cy="name-field"]').type("foobar");
    cy.get('[data-cy="email-field"]').type("abc@abc.com");
    cy.get('[data-cy="password-field"]').type("12345");
    cy.get('[data-cy="terms-box"]').click();
    cy.get('[data-cy="terms-box"]').should("be.checked");
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="form-field"]').submit();
    // reg success ?
  });
});

// TEST 3

// Arrange
describe("Bir input boş bırakılırsa form doğrulamasını test et", function () {
  // Act
  it("Visits my form site", function () {
    // Assert
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="form-field"]').submit();
  });
});
