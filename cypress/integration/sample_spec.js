describe('Checks main page title', () => {
  it('displays title', () => {
    cy.visit('/')
    cy.get('.headline').should(
      'contain',
      'Welcome to the Vuetify + Nuxt.js template'
    )
  })
  
  it('offers nav options', () => {
    cy.visit('/')
    cy.get('[data-cy=main-menu]')
      .click()
    cy.get('.v-list-item__title')
      .contains('Inspire')
      .click()
    cy.get('blockquote').then(($blockquote) => {
      expect($blockquote).to.contain('First, solve the problem.')
    })
  })
})
