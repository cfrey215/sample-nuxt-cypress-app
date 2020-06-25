describe('A user', () => {
  context('when visiting the sample nuxt app', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('can see the welcome message', () => {
      cy.get('.headline').should('contain','Welcome to the Vuetify + Nuxt.js template')
    })
    
    it('can navigate to the inspire page via the nav bar menu', () => {
      cy.get('[data-cy=main-menu]')
        .click()
      cy.get('.v-list-item__title')
        .contains('Inspire')
        .click()
      cy.url().should('include', '/inspire')
      cy.get('blockquote').then(($blockquote) => {
        expect($blockquote).to.contain('First, solve the problem.')
      })
    })

    it('can navigate to the inspire page via the continue button', () => {
      cy.get('[data-cy=continue-button]')
        .click()
      cy.url().should('include', '/inspire')
    })
  })
})
