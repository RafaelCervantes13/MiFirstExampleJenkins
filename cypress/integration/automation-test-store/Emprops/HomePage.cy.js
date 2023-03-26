
describe('Iterate over elements', () => {
it("Review all views", () => {
    cy.visit('https://emprops.dev-lk.mx');
});

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('bool is not defined')) {
        return false
    }
 })

})