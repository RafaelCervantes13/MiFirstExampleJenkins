describe('Interact with dropdown lists via webdriveruni', () => {
    it('Select specific values via select dropdown lists', () => {
      cy.visit('https://webdriveruniversity.com/');
      cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true}) //open in another tab

      cy.get('#dropdowm-menu-2').select('Maven').should('have.value', 'maven')
      //cy.get('#dropdowm-menu-2').select('junit').should('have.value', 'Junit')

    });
  })