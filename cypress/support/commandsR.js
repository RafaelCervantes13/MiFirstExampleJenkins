Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click();

})


Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
})
Cypress.Commands.add('scrollDownUp', () => {
    cy.scrollTo('bottom', { duration: 2000 }) //Desplácese hasta la parte inferior de la ventana
    cy.scrollTo('top', { duration: 2000 })
})
Cypress.Commands.add('addMultipleProducts', () => {
    cy.get('.pricebar').each(($el, index) => {
        cy.get('button').eq([index]).click()
    })
})

Cypress.Commands.add('completeInputs', () => {
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Rafael')
    cy.get('[data-test="lastName"]').type('Cervantes')
    cy.get('[data-test="postalCode"]').type('55069')
    cy.get('[data-test="continue"]').click()

})
Cypress.Commands.add('validatePrice', () => {
    cy.get('.summary_subtotal_label').then(function ($ele) {
        const priceProduct = parseFloat(($ele.text().split('$')[1]))
        var priceProductD = priceProduct.toFixed(2);
        cy.get('.summary_tax_label').then(function ($ele) {
            const tax = parseFloat(($ele.text().split('$')[1]))
            cy.get('.summary_total_label').then(function ($ele) {
                const total = parseFloat(($ele.text().split('$')[1]))
                let suma = parseFloat(priceProductD) + parseFloat(tax);
                expect(suma).to.eq(total)
            })
        })
    })
})

Cypress.Commands.add('validateFooter', () => {
    cy.get('.footer').should('be.visible').then(function ($ele) {
        const textFooter = $ele.text().split('©')[1];
        expect(textFooter).contains('2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    });
});