describe('Add all products', () => {
    const credentials = require('../../fixtures/fixtures-demo/sauceCredentials.json');

    it('First', () => {
        cy.visit('/')
        cy.login(credentials.standarUser, credentials.systemPassword)
        cy.addMultipleProducts();       
        cy.completeInputs();
        cy.validatePrice();
    });

});