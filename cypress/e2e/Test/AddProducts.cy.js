
describe('Add products in ', () => {
  
  const credentials = require('../../fixtures/fixtures-demo/sauceCredentials.json');

  beforeEach(() => {
    cy.visit('/');
    cy.login('standard_user', 'secret_sauce')
  })

  it('Add product', () => {

    setTimeout(() => {
      const nameProduct = 'Sauce Labs Bike Light';
      cy.get('#item_0_title_link > .inventory_item_name').should('have.text', nameProduct) //validate the text that have in list of products
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();//add product

      cy.get('.shopping_cart_link').click();//open cart shop
      cy.get('.inventory_item_name').should('have.text', nameProduct) //validate the text in cart shop that are the same that have in list of products
      cy.get('[data-test="continue-shopping"]').click() // return home
    }, 3000)

  })
  it('Remove product', () => {
    cy.scrollDownUp()
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click() //Remove
    cy.scrollTo('top', { duration: 2000 })
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('have.text', 'Add to cart')
  })

  it('Filter for...', () => {

    
      //Validate filter of letter A
    cy.get('[data-test="product_sort_container"]').select('Name (A to Z)').then(function () {
      cy.get('#item_4_title_link > .inventory_item_name').then(function ($ele) {
        const firstLetter = $ele.text().charAt(0);
        expect(firstLetter).not.contains('Z');
      })
    })

      //Validate filter of letter Z
  cy.get('[data-test="product_sort_container"]').select('Name (Z to A)').then(function () {
    cy.get('#item_4_title_link > .inventory_item_name').then(function ($ele) {
      const firstLetter = $ele.text().charAt(0);
      expect(firstLetter).not.contains('A');
    })
  })

  cy.scrollDownUp()
  //Validate filter of price low
  cy.get('[data-test="product_sort_container"]').select('Price (low to high)').then(function () {
    cy.get(':nth-child(1) > .inventory_item_description').then(function ($ele) {
      const minorProduct = parseFloat(($ele.text().split('$')[1]));
      cy.get(':nth-child(6) > .inventory_item_description').then(function ($ele) {
        const majorProduct = parseFloat(($ele.text().split('$')[1]));
        expect(minorProduct).to.be.lessThan(majorProduct);

      })
    })
  })
  cy.scrollDownUp()
  cy.get('[data-test="product_sort_container"]').select('Price (high to low)').then(function () {
      //Validate filter of price high
    cy.get(':nth-child(1) > .inventory_item_description').then(function ($ele) {
      const majorProduct = parseFloat(($ele.text().split('$')[1]));
      cy.get(':nth-child(6) > .inventory_item_description').then(function ($ele) {
        const minorProduct = parseFloat(($ele.text().split('$')[1]));
        expect(majorProduct).to.be.greaterThan(minorProduct);
      })
    })
  })
})
})