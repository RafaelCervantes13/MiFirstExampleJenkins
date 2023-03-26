describe('Verifying variables, cypress commands and jquery commands', () => {
    it('Navigating to specific product pages', () => {
        //The following will pass
        cy.visit('https://automationteststore.com/');
        /*         
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        makeupLink.click();
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");        
        skincareLink.click();  */

        //The following will faild
/*       const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        makeupLink.click();
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");        
        skincareLink.click(); */

        //Recomended Approach
         cy.get("a[href*='product/category&path=']").contains("Skincare")
         cy.get("a[href*='product/category&path=']").contains("Makeup") 
    });
        it.only('Validate propieties of the Contact Us Page', () => {
            cy.visit('https://automationteststore.com/index.php?rt=content/contact');
            //Uses cypress commands and chainin
            
            cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain','First name:');           

             //JQuery Approach 

             cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
                const firstNameText = text.find('#field_11').text()
                expect(firstNameText).to.contains('First name')

                //Embedded commands (Closure)
                cy.get('#field_11').then( fnText=>{
                    cy.log(fnText.text())
                    cy.log(fnText)
                })
             })

        }); 
})