describe('Test File Upload via webdriveruni', () => {
    it('Upload a file...', () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#file-upload').scrollIntoView().invoke('removeAttr', 'target').click({ force: true }) //open in another tab          

        cy.get("#myFile").selectFile("cypress/fixtures/LKXM.png");
        cy.get("#submit-button").click();


    })
    it('Upload No file...', () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#file-upload').scrollIntoView().invoke('removeAttr', 'target').click({ force: true }) //open in another tab          
        cy.get("#submit-button").click();
    })
})