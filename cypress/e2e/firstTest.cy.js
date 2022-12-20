///<reference types="cypress" />

describe('My First Test', () => {
  beforeEach(() => {
  cy.visit('https://example.cypress.io')
  });
  it('clicking "type" navigate to a new url', () => {
    cy.contains('next').click()
    cy.url().should('include', 'command/traversal')
  })
})
