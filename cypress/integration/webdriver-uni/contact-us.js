describe('Test Contact Us form via WebDriverUni', () => {
  before(function () {
    cy.fixture('example').then(function (data) {
      //this.data = data;
      globalThis.data = data;
    })
  })
  it('Should be able to submit a succesfull submision via contact us form', () => {
    //cypress code
    cy.log('Hi');
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }) //open in another tab
    //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us');
    cy.url().should('include', 'contactus')
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email );
    cy.get('textarea.feedback-input').type('How can I learn Cypress?');
    cy.get('[type="submit"]').click();
    cy.get('h1').should('have.text', 'Thank You for your Message!')

  });
  it('Should not be able to submit a succesfull submision via contact us form', () => {
    //cypress code
    //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }) //open in another tab
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('textarea.feedback-input').type('How can I learn Cypress?');
    cy.get('[type="submit"]').click();
    cy.get('body').contains('Error: all fields are required2');
  });

})