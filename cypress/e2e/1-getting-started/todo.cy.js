/// <reference types="cypress" />

describe('the game board', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have two player sections', () => {
    cy.get('.player-container')
    .should('have.length', 2)

  })

  it('should display the dice', () => {
    cy.get('.game')
    .find('img')
    .should('have.length', 6)
    .should('have.attr', 'alt')
    .should('include', 'dice')
  })

})