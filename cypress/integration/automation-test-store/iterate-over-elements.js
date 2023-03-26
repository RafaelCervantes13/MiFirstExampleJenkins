
describe('Iterate over elements', () => {
    beforeEach(function(){
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })
    it('Navigating to specific product pages', () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            cy.log("Index" + index + " : " + $el.text())
        });
    });

    it('Add another specific product to basket', () => {
        cy.selectProduct('Curls to straight Shampoo');
    });

    it('Add another specific product to basket 2', () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    });
})