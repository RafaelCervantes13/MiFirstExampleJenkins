describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true })
    });

    it("Calculate the and assert the total age of all users ", () => {
        var userDetails = [];
        let numb = 0;
        cy.get("#thumbnail-1 td").each(($el, index, $list) => {
            userDetails[index] = $el.text();
            cy.log('detailssss', userDetails[index]);
        }).then(() => {
            var i;
            for (i = 1; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    numb += Number(userDetails[i])
                    //cy.log(userDetails[i]);
                }
                cy.log("Found total age:" + numb)
                expect(numb).to.eq(322)
            }
        })
    })
    it.only("Calculate and assert the age of a given user based on last name ", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes("Woods")) {
                cy.log('Entro al if');
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function (age) {
                    const userAge = age.text();
                    expect(userAge).to.equal("80");
                })
            } else {
                cy.log('No entro');
            }
        })

    })
})