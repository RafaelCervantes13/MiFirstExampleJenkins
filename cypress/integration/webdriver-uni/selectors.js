describe("Selector examples",() =>{
  it('', () =>{
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');

    //By tag name
    cy.get('input');

    //By attribute name and value
    cy.get("input[name='first_name']")

    //By id
    cy.get('#contact_me')

    //By class
    cy.get('.feedback-input');

    //By multiple classess
    cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

    //By two different attributes
    cy.get("[name='email'][placeholder='Email Address']");

    //By xpath
    cy.xpath("//input[@name='first_name']");
  })
})