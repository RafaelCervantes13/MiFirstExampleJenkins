describe('Send deliver', () => {
    const loginDates = require('../../fixtures/fixtures-demo/sauceCredentials.json');
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.typeLogin(loginDates.standarUser, loginDates.systemPassword)
    })


    it('Test first', () => {
        cy.addOneProduct();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.completeInputs()
        cy.get('[data-test="continue"]').click()
        cy.scrollDownUp()
        cy.validatePrice()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.addAllProducts()
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.completeInputs()
        cy.get('[data-test="continue"]').click()
        cy.scrollDownUp()
        cy.validatePrice()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="back-to-products"]').click()
    });
})