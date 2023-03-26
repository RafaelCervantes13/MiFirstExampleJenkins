describe('Cypress Web Security', () => {
    it.skip('Validate visiting two different domains', () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.visit('https://automationteststore.com/');
  
    });
    it('Validate visiting two different domains via user actions', () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()//open a new page in two tabs
    });
  
    it('Origin command', () => {
        cy.origin('webdriveruniversity.com', () => {
            cy.visit("/");
        })

        cy.origin('automationteststore.com', () => {
            cy.visit("/");
        })
    });
})