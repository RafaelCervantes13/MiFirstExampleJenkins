describe('Test mouse actions', () => {
  it('Scroll element into view', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true }) //open in another tab          
  })

  it('Should be able to drag and drop a draggable item', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true }) //open in another tab          

    cy.get('#draggable').trigger('mousedown', { which: 1 })
    cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
  })

  it('I Should be able to perform a double mouse click ', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true }) //open in another tab          

    cy.get('#double-click').dblclick();
  })
  it.only('I Should be able hold down the left mouse click button on a giver element', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true }) //open in another tab          

    cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
      expect($element).to.have.css('background-color' , 'rgb(0, 255, 0)')
    })
  })
})