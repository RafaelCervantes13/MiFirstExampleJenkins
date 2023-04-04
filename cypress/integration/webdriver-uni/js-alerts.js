describe('Handle js alerts', () => {
  it('Confirm js alert contains the correct text', () => {
    //cypress code
    cy.log('Hi');
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
    cy.get('#button1').click()


    cy.on('window:alert', (str) => { //especifica el tipo de evento
      //cy.log('str', str);
      expect(str).to.equal('I am an alert box!')
    })

  });

  it('Validate js confirm alert box works correctly when click ok', () => {

    cy.visit('https://webdriveruniversity.com/');
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
    cy.get('#button4').click()

    cy.on('window:confirm', (str) => { //especifica el tipo de evento
      //cy.log('str', str);
      return true;
    })
    cy.get('#confirm-alert-text').contains('You pressed OK!');
  });
  it('Validate js confirm alert box works correctly when click cancel', () => {

    cy.visit('https://webdriveruniversity.com/');
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
    cy.get('#button4').click()
    cy.get('#confirm-alert-text').contains('You pressed OK!');

    cy.get('#button4').click()

    cy.on('window:confirm', (str) => { //especifica el tipo de evento
      return false;
    })
    cy.get('#confirm-alert-text').contains('You pressed Cancel!');

  });

  it.only('Validate js confirm alert box using a stub', () => {

    cy.visit('https://webdriveruniversity.com/');
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
    
    const stub = cy.stub();
    cy.on('window:confirm', stub)
    cy.get('#button4').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then(() => {
      return true;
    }).then(() => {
      cy.get('#confirm-alert-text').contains('You pressed OK!');
  })
});

  })