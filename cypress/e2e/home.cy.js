
describe('Home Page', () => {
    it('should display the home page', () => {
      cy.visit('http://localhost:3000');
      cy.contains('This site is under construction');
    });
  });