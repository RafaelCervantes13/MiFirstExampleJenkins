describe('Validate footer', () => {
    const credentials = require('../../fixtures/fixtures-demo/sauceCredentials.json');

    it('Testing', () => {
        cy.visit('/')
        cy.login(credentials.standarUser, credentials.systemPassword)
        cy.validateFooter()

    });
});