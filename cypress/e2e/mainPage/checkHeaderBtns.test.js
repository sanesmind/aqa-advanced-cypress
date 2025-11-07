
describe("Header buttons", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it("Header buttons are visible and have links", () => {
        const expectedGoTOs = [
            "Home",
            "About",
            "Contacts"
        ];
        cy.get(`nav .header-link`).each(($link) => {
            cy.wrap(expectedGoTOs).should('contain', $link.text());
        })

    })

    it("Header log in buttons are visible and have links", () => {

        cy.contains("Guest log in");
        cy.contains("Sign In");

    })

})