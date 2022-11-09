/// <reference types="cypress"/>

describe('Todo app', () => {
  beforeEach('Start page and inject axe', () => {
    cy.visit('https://todomvc.com/examples/react');
    cy.injectAxe();
  });
  it('should log any axe failures', () => {
    cy.checkA11y();
  });

  it('should exclude specific elements on the page', () => {
    cy.checkA11y({ exclude: ['.learn'] });
  });
  it('should test only specific elements on the page', () => {
    cy.checkA11y('.new-todo');
  });
  it('should only include rules with serious and critical impacts', () => {
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
  });
  it('should exclude specific accessibility rules', () => {
    cy.checkA11y(null, {
      rules: {
        'color-contrast': { enabled: false },
      },
    });
  });
});
