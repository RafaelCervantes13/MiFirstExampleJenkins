describe("Traversing DOM elements in Cypress", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true })
    });

    it("children() to get the children of DOM elements", () => {
        cy.get(".traversal-breadcrumb").children('.active').should('contain', 'Contact Us')
    })
    it("closet() to validate the closest ancestor DOM element", () => {
        cy.get(".traversal-badge").closest('ul').should('have.class', 'list-group')
    })
    it("eq() to retieve a specific element based on index", () => {
        cy.get(".traversal-drinks-list > *").eq(2).should('contain', 'Milk')
    })
    it("filter() to retieve DOM elements that match a specific selector", () => {
        cy.get('.btn-group-toggle > *').filter('.active').should('contain', 'Button-1')
    })
    it.only("find() to retieve DOM elements of a given selector", () => {
        cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)
    })
    it("first() to retieve the first DOM element within elements", () => {
        cy.get('.traversal-table > tbody > tr > td').first().should('contain', 'Andy')
    })
    it("last() to retieve the first DOM element within elements", () => {
        cy.get('.traversal-table > tbody > tr > td').last().should('contain', 'Scott')
    })
    it("nextAll() to get all of the next sibling DOM elements whithin elements", () => {
        cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length' , '3')
    })
    it("nextUnitl() to get all of the next sibling DOM elements whithin elements until another element", () => {
        cy.get('#coffee').nextUntil('#milk')
    })
    
    it("not() to remove DOM element(s) from the set of elements", () => {
        cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', 'disabled')
    })
    it("parents() to get parents DOM element of elements", () => {
        cy.get('.traversal-cite').parents().should('match' , 'blockquote')
    })
    it("prev() to get previous sibling DOM element within elements", () => {
        cy.get('#sugar').prev().contains('Espresso')
    })
    it("prevAll() to get all previous sibling DOM element within elements", () => {
        cy.get('.sales').prevAll().should('have.length', 2)
    })
    it("prevUntil() to get all previous sibling DOM element within elements until other element", () => {
        cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)
    })
    it.only("siblings() to get all sibling DOM elements of elements", () => {
        cy.get('.traversal-button-other-states .active').siblings().should('have.length', 3)
    })
})