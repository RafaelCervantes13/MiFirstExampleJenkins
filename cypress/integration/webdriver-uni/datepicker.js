describe('Test Datepicker via webdriveruni', () => {
  it('Handle webdriveruni iframe and modal', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true }) //open in another tab
    cy.get('#datepicker').click();

    /*   let date = new Date();
      date.setDate(date.getDate())
      cy.log(date.getDate()) //get current day i.e. 22

      let date1 = new Date();
      date1.setDate(date.getDate() + 5)
      cy.log(date1.getDate()) //get current day i.e. 22 + 5 = 27 */
    var date = new Date();
    date.setDate(date.getDate() + 300);

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", { month: "long" });
    var futureDay = date.getDay();

    cy.log("futureYear: " + futureYear)
    cy.log("futureMonth: " + futureMonth)
    cy.log("futureDay: " + futureDay)

    function selectMonthAndYear() {
      cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
        if (!currentDate.text().includes(futureYear)) {
          cy.get('.next').first().click();
          selectMonthAndYear();
        }
      }).then(() => {
        cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
          if (!currentDate.text().includes(futureMonth)) {
            cy.get('.next').first().click();
            selectMonthAndYear();
          }
        })
      })
    }
    function selectFutureDay() {
      cy.get('[class= "day"]').contains(futureDay).click();
    }
    selectMonthAndYear();
    selectFutureDay();
  });
})