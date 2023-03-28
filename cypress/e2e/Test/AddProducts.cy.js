
describe('Add products in ', () => {

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
    cy.get('[data-test="product_sort_container"]').should('have.value', 'az')
    cy.get('[data-test="product_sort_container"]').select('Name (Z to A)')
    cy.scrollDownUp()
    cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
    cy.scrollDownUp()
    cy.get('[data-test="product_sort_container"]').select('Price (high to low)')
  })
})