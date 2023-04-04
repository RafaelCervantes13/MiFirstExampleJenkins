describe('OpenTabsOfFooter', () => {
    const credentials = require('../../fixtures/fixtures-demo/sauceCredentials.json');
    it('Testing...', () => {
        cy.visit('/')
        cy.login(credentials.standarUser, credentials.systemPassword)

        cy.get('.social_twitter > a').click() // will open the contact page in a new tab
        cy.get('.social_facebook > a').click()
        cy.get('.social_linkedin > a').click() 
    });

});