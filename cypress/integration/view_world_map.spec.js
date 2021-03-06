describe('World map', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('something about the error')
      done()
      return false
    })
    cy.get('button:first').click()
    cy.get('button:first').click()
  })

  it('shows the game title', () => {
    cy.get('h1')
      .should('contain', 'World Map');
  });

  it('shows the available cities', () => {
    cy.get('button.city-button')
      .should('have.length', 26)
  });

  // it('reroutes to city', () => {
  //   cy.get('.grid button.city-button:first').click().location()
  //     .should((loc) => {
  //       expect(loc.hash).to.eq('#/oxford')
  //     });
  // });
});
