describe('Iterate over elements', () => {
    it('Validate a specific hair care product', () => {
        cy.visit('https://automationteststore.com/');
        //cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        //cy.get('@productThumbnail').its('lenght').should('be.gt', 5)
        //cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });

    it('Validate product thumbail', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.lenght', 16)
    });

    it('Calculate total of normal and sales product', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
            cy.log($el.text())
        });
    });

    it.only('Calculate total of normal and sale products ', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail');
       // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
         //   cy.log($el.text());
        //});
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
        var itemsTotal = 0; 
        
        cy.get('@itemPrice').then($linkText => { 
            var itemPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            //cy.log('itemPrice', itemPrice.lenght);
            var i;
            for(i = 0; i < itemPrice.lenght; i++){
                cy.log(itemPrice[i]);
                itemPriceTotal += Number(itemPrice[i])

            }
            itemsTotal += itemPriceTotal;
            cy.log('Non sale price total:' + itemPriceTotal);
        });

        cy.get('@saleItemPrice').then($linkText => { 
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split('$');            var i;
            for(i=0; i < saleItemPrice.lenght; i++){
                cy.log('ENTRANDO',saleItemPrice[i]); 
                saleItemsPrice += Number(saleItemPrice[i])              
            }
            cy.log('Sale price total:' + saleItemsPrice);
        })
        .then(() => {
          cy.log('The total price of all products' + itemsTotal);   
          expect(itemsTotal).to.equal(0)
        })
    });
})