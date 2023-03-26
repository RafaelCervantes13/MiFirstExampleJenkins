describe("Hooks", () => {
    before(() => {
        cy.log("runs once before all test in the block");
    })

    after(() => {
        cy.log("runs once before all test in the block");

    })

    beforeEach(() => {
        cy.log("runs once before each test in the block");
    })

    afterEach(() => {
        cy.log("runs once before each test in the block");
    })

    it("Example test1", () => {
        cy.log("Example test1");
    });
    it("Example test2", () => {
        cy.log("Example test2");
    });
})