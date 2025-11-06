import { faker } from '@faker-js/faker';

describe("Login", () => {

    const passNums = faker.number.int({min: 200, max: 900})
    const userData = {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: `Qwerty${passNums}`,
        repeatPassword: `Qwerty${passNums}`,
    }

    beforeEach(() => {
        cy.visit("/");

        cy.get(".btn-primary").as("loginBtn");
        cy.get("@loginBtn").click();

        cy.get('.modal-content').within(($form)=>{
            cy.wrap($form).should("have.class", "modal-content");
            cy.get("#signupName").type(userData.name)
            cy.get("#signupLastName").type(userData.lastName)
            cy.get("#signupEmail").type(userData.email)
            cy.get("#signupPassword").type(userData.password)
            cy.get("#signupRepeatPassword").type(userData.password)

            cy.get(".btn-primary").click()
        })

        cy.get("#userNavDropdown").click()
        cy.get(".user-nav_menu .user-nav_link").contains("Logout").click();
    });

    it("should log in successfully with valid credentials", () => {
        cy.get(".header_signin").click();

        cy.get('.modal-content').within(()=>{
            cy.get("#signinEmail").type(userData.email)
            cy.get("#signinPassword").type(userData.password)

            cy.get(".btn-primary").click()

            cy.location().its("pathname").should("eq", "/panel/garage")
        })
        cy.get(".btn-primary").filter(':contains("Add car")').should("be.visible")
    })
})