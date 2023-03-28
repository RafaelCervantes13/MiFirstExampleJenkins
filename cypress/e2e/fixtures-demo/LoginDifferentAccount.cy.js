
describe('LoginWithDifferentsAccount', () => {
    const credentials = require('../../fixtures/fixtures-demo/sauceCredentials.json');
    beforeEach(() => {
        cy.visit('/');
    })

    it('Validate credentials', () => {

        cy.login(credentials.standarUser, credentials.systemPassword)

        cy.get('.title').should('contain.text', 'Products')
    })
    it('Incorrect username', () => {

        cy.login(credentials.dumyUser, credentials.systemPassword)

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')

    })
    it('Incorrect passsword', () => {

        cy.login(credentials.standarUser, credentials.dummyPassword)

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })
    it('User locked', () => {

        cy.login(credentials.userLocked, credentials.systemPassword)

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

})