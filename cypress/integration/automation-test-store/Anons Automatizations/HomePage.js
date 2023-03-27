const resolutions = Cypress.env('resolutions');
describe('Nav Menus', () => {

    resolutions.forEach((resolution) => {
        context(`Resolution of  ${resolution}`, () => {

            beforeEach(() => {
                cy.visit('https://anons.army/');
                
               
            })

            it("Review all views", () => {
                cy.wait(4000)
            });

            Cypress.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes('bool is not defined')) {
                    return false
                }
            })
        })

    })
})