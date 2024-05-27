describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about'); // Navigate to the About page
  });

  it('should display main heading', () => {
    cy.contains('h1', 'Angular NgRx Material Starter'); // Check the main heading text
  });

  it('should display "Get started" H2', () => {
    cy.get('h2:contains("Get started")');
    // cy.get('section#getting-started').should('be.visible'); // Check if "Getting Started" section is visible
  });

  it('first action button should lead to "Features" route', () => {
    cy.get('button:contains("Features")').click();
    // cy.get('button').eq(0).click(); // Click the first action button
    cy.url().should('include', '/feature-list'); // Check the URL to ensure it navigated to the "Features" route
  });
});
