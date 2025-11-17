describe('Add car with Fuel Expenses', () => {

    beforeEach(() => {
        cy.visit("/");
        cy.get(".header_signin").filter(':contains("Sign In")').click();

    cy.get('.modal-content').within(()=>{
        cy.get("#signinEmail").type(Cypress.env("login"));
        cy.get("#signinPassword").type(Cypress.env("password"));

        cy.get(".btn-primary").click();

        cy.location().its("pathname").should("eq", "/panel/garage");
    })
    cy.get(".btn-primary").filter(':contains("Add car")').should("be.visible");
    })

    afterEach(() => {
        cy.get("#userNavDropdown").click({ force: true });
        cy.get(".user-nav_link").filter(':contains("Logout")').click({ force: true });
    })

    it("Check that mileage is requiered", ()=> {
        cy.get(".btn-primary").filter(':contains("Add car")').click();

        cy.get("#addCarMileage").clear().blur();
        cy.contains('Mileage cost required').should('be.visible');
        cy.get('#addCarMileage').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('.btn-primary').should('be.disabled')

        cy.get('.close').click();

    })

    it("Check creation of a car", ()=> {
        cy.contains('button', 'Add car').click();
        cy.get("#addCarMileage").type("100");
        cy.contains('.modal-footer button.btn-primary', 'Add')
            .should('not.be.disabled')
            .click();
        cy.get('.alert.alert-success')
            .should('contain.text', 'Car added');
        cy.get('.car.jumbotron').should('be.visible');

        cy.get('.car_actions .car_edit').first().click();
        cy.get('.btn-outline-danger').click();
        cy.get('.btn-danger').click();

    })

    it("Add fuel NO liters", ()=>{

        cy.contains('button', 'Add car').click();
        cy.get("#addCarMileage").type("100");
        cy.contains('.modal-footer button.btn-primary', 'Add')
            .should('not.be.disabled')
            .click();

        cy.contains('button', 'Add fuel expense').click();
        cy.get("#addExpenseLiters").clear().blur();
        cy.contains('Liters required').should('be.visible');
        cy.get('#addExpenseLiters').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('.modal-footer button.btn-primary', 'Add').should('be.disabled')

        cy.get('.close').click();

        cy.get('.car_actions .car_edit').first().click();
        cy.get('.btn-outline-danger').click();
        cy.get('.btn-danger').click();
    })

    it("Add fuel NO total cost", ()=>{

        cy.contains('button', 'Add car').click();
        cy.get("#addCarMileage").type("100");
        cy.contains('.modal-footer button.btn-primary', 'Add')
            .should('not.be.disabled')
            .click();

        cy.contains('button', 'Add fuel expense').click();
        cy.get("#addExpenseTotalCost").clear().blur();
        cy.contains('Total cost required').should('be.visible');
        cy.get('#addExpenseTotalCost').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('.modal-footer button.btn-primary', 'Add').should('be.disabled')

        cy.get('.close').click();

        cy.get('.car_actions .car_edit').first().click();
        cy.get('.btn-outline-danger').click();
        cy.get('.btn-danger').click();
    })

    it("Add fuel expense", ()=>{
        cy.contains('button', 'Add car').click();
        cy.get("#addCarMileage").type("100");
        cy.contains('.modal-footer button.btn-primary', 'Add')
            .should('not.be.disabled')
            .click();

        cy.contains('button', 'Add fuel expense').click();

        cy.get("#addExpenseLiters").type('10').blur();

        cy.get("#addExpenseTotalCost").type('123').blur();

        cy.get('.close').click();

        cy.get('.car_actions .car_edit').first().click();
        cy.get('.btn-outline-danger').click();
        cy.get('.btn-danger').click();
    })
})