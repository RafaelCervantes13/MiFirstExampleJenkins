describe('Validate webdriveruni page links', () => {
    it('Confirm links redirect to the correct pages', () => {
      //cypress code  
      //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');  
      cy.visit('https://webdriveruniversity.com/');
      cy.get('#contact-us').invoke('removeAttr','target').click({force:true}) //open in another tab
      cy.url().should('include', 'contactus');

      cy.go('back')
      cy.reload()
      cy.url().should('include', 'https://webdriveruniversity.com/');
      //cy.reload(true);//reload without using cache
      cy.go('forward')
      cy.url().should('include', 'contactus');
      cy.go('back')
      cy.get('#login-portal').invoke('removeAttr','target').click({force:true}) //open in another tab
      cy.url().should('include', 'Login-Portal');
      cy.go('back')

      
      cy.get('#to-do-list').invoke('removeAttr','target').click({force:true}) //open in another tab
      cy.url().should('include', 'To-Do-List');
    });

  })