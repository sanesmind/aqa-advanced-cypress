import {faker} from "@faker-js/faker";

describe(`Registration name field tests`, () => {


    beforeEach(() => {
        cy.visit('/');
        cy.get(".btn-primary").as("signUpBtn");
        cy.get("@signUpBtn").click();
        cy.get('#signupName').as('name');
    })

    it('Name is empty', () => {

        cy.get('@name').clear().blur();
        cy.contains('Name required').should('be.visible');
        cy.get('@name').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('Name is invalid', () => {

        const invalidName = '123!@#';

        cy.get('@name').type(invalidName).blur();
        cy.contains('Name is invalid').should('be.visible');
        cy.get('@name').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('Name has wrong length', () => {

        const nameShort = 'A';
        const nameLong = 'Aaaaaaaaaaaaaaaaaaron';

        cy.get('@name').clear().type(nameShort).blur();
        cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('@name').should('have.css', 'border-color', 'rgb(220, 53, 69)');

        cy.get('@name').clear().type(nameLong).blur();
        cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('@name').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

})

describe(`Registration Last name field tests`, () => {


    beforeEach(() => {
        cy.visit('/');
        cy.get(".btn-primary").as("signUpBtn");
        cy.get("@signUpBtn").click();
        cy.get('#signupLastName').as('lastName');
    })

    it('Last name is empty', () => {

        cy.get('@lastName').clear().blur();
        cy.contains('Last name required').should('be.visible');
        cy.get('@lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('Last name is invalid', () => {

        const invalidName = '123!@#';

        cy.get('@lastName').type(invalidName).blur();
        cy.contains('Last name is invalid').should('be.visible');
        cy.get('@lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('Last name has wrong length', () => {

        const nameShort = 'A';
        const nameLong = 'Aaaaaaaaaaaaaaaaaaron';

        cy.get('@lastName').clear().type(nameShort).blur();
        cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('@lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');

        cy.get('@lastName').clear().type(nameLong).blur();
        cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('@lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

})

describe(`Registration email field tests`, () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get(".btn-primary").as("signUpBtn");
        cy.get("@signUpBtn").click();
        cy.get('#signupEmail').as('email');
    })

    it('Email is empty', () => {

        cy.get('@email').clear().blur();
        cy.contains('Email required').should('be.visible');

        cy.get('@email').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it('Email is invalid', () => {

        cy.get('@email').type('wrongEmail').blur();
        cy.contains('Email is incorrect').should('be.visible');

        cy.get('@email').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it('Email is valid', () => {

        const validEmail = faker.internet.email()

        cy.get('@email').type(`${validEmail}`).blur();
        cy.contains('Email is incorrect').should('not.exist');
        cy.contains('Email required').should('not.exist');
        cy.get('@email')
            .should('have.css', 'border-color')
            .and('not.eq', 'rgb(220, 53, 69)');
    })
})

describe(`Registration Password field tests`, () => {


    beforeEach(() => {
        cy.visit('/');
        cy.get(".btn-primary").as("signUpBtn");
        cy.get("@signUpBtn").click();
        cy.get('#signupPassword').as('pass');
    })

    it('Password is empty', () => {

        cy.get('@pass').clear().blur();
        cy.contains('Password required').should('be.visible');
        cy.get('@pass').should('have.css', 'border-color', 'rgb(220, 53, 69)');

    });

    it('Password has less than 8 chars', () => {

        cy.get('@pass').clear().type('Aa1Dd23').blur();
        cy.contains(
            'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
        ).should('be.visible');
        cy.get('@pass').should('have.css', 'border-color', 'rgb(220, 53, 69)');

    });

    it('Password has more than 15 chars', () => {

        cy.get('@pass').clear().type('testPassPass1234').blur();
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
        cy.get('@pass').should('have.css', 'border-color', 'rgb(220, 53, 69)');

    });

    it('Password has no digits', () => {

        cy.get('@pass').clear().type('AsdQweZxc').blur();
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
        cy.get('@pass').should('have.css', 'border-color', 'rgb(220, 53, 69)');

    });

    it('Password has no capital records', () => {

        cy.get('@pass').clear().type('qweasdzxc1').blur();
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
        cy.get('@pass').should('have.css', 'border-color', 'rgb(220, 53, 69)');

    });

    it('Password has no small letters', () => {

        cy.get('@pass').clear().type('QWEASDZXC1').blur();
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
        cy.get('@pass').should('have.css', 'border-color', 'rgb(220, 53, 69)');

    });

})

describe(`Registration Repeat Password field tests`, () => {

    beforeEach(() => {

        // const passLetters = faker.person.firstName();
        // const passNums = faker.number.int({min: 100000, max: 1000000});

        cy.visit('/');
        cy.get(".btn-primary").as("signUpBtn");
        cy.get("@signUpBtn").click();
        cy.get('#signupPassword').as('pass');
        cy.get('#signupRepeatPassword').as('repeat')

    })

    it('Repeat password is empty', () => {

        cy.get('@repeat').clear().blur();

        cy.contains('Re-enter password required').should('be.visible');

        cy.get('@repeat').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('Passwords do not match', () => {

        cy.get('@pass').type(`RightPass123`, { sensitive: true });
        cy.get('@repeat').clear().type('WrongPass123', { sensitive: true }).blur();
        cy.contains('Passwords do not match').should('be.visible');
        cy.get('@repeat').should('have.css', 'border-color', 'rgb(220, 53, 69)');

    });

    it('Passwords match', () => {

        const passLetters = faker.person.firstName();
        const passNums = faker.number.int({min: 100000, max: 1000000});

        cy.get('@pass').type(`${passLetters}${passNums}`, { sensitive: true });

        cy.get('@repeat').clear().type(`${passLetters}${passNums}`, { sensitive: true }).blur();

        cy.contains('Re-enter password required').should('not.exist');
        cy.contains('Passwords do not match').should('not.exist');

        cy.get('@repeat')
            .should('have.css', 'border-color')
            .and('not.eq', 'rgb(220, 53, 69)');
    });

})

describe('Successful registration and login', () => {

    const passNums = faker.number.int({min: 200, max: 900})
    const user = {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: `Qwerty${passNums}`,
        repeatPassword: `Qwerty${passNums}`,
    }

    it('Should successfully register a new user', () => {
        cy.visit('/');
        cy.get(".btn-primary").as("signUpBtn");
        cy.get("@signUpBtn").click();

        cy.get('#signupName').type(user.name);
        cy.get('#signupLastName').type(user.lastName);
        cy.get('#signupEmail').type(user.email);
        cy.get('#signupPassword').type(user.password, { sensitive: true });
        cy.get('#signupRepeatPassword').type(user.repeatPassword, { sensitive: true });

        cy.contains('button', 'Register').click();

        cy.get("#userNavDropdown").click()
        cy.get(".user-nav_menu .user-nav_link").contains("Logout").click();
    });

    it('Should login via custom login command', () => {

        cy.login(user.email, user.password);

        cy.url().should('include', '/garage');
        cy.contains('h1', 'Garage').should('be.visible');
    });
});