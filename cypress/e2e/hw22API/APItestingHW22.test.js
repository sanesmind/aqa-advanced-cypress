import {faker} from "@faker-js/faker";


describe('API learning', () => {

    const car = {
        brand: 'BMW',
        model: 'X5',
        mileage: faker.number.int({ max: 1000 })
    };


    const passNums = faker.number.int({min: 200, max: 900})
    const user = {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: `Qwerty${passNums}`,
        repeatPassword: `Qwerty${passNums}`,
    }

    before(() => {
        cy.visit('/');

        cy.get(".btn-primary").as("signUpBtn");
        cy.get("@signUpBtn").click();

        cy.get('#signupName').type(user.name);
        cy.get('#signupLastName').type(user.lastName);
        cy.get('#signupEmail').type(user.email);
        cy.get('#signupPassword').type(user.password);
        cy.get('#signupRepeatPassword').type(user.repeatPassword);

        cy.contains('button', 'Register').click();

        cy.login(user.email, user.password);

    })

    // beforeEach(() => {
    //     cy.visit('/');
    //     cy.login(user.email, user.password);
    // })
    // it('Should successfully register a new user', () => {
    //
    //     cy.get(".btn-primary").as("signUpBtn");
    //     cy.get("@signUpBtn").click();
    //
    //     cy.get('#signupName').type(user.name);
    //     cy.get('#signupLastName').type(user.lastName);
    //     cy.get('#signupEmail').type(user.email);
    //     cy.get('#signupPassword').type(user.password);
    //     cy.get('#signupRepeatPassword').type(user.repeatPassword);
    //
    //     cy.contains('button', 'Register').click();
    //
    // });


    it("Check creation of a car with API help", ()=> {

     //   cy.login(user.email, user.password);

        cy.get(".btn-primary").filter(':contains("Add car")').click();

        cy.intercept("POST", "/api/cars").as("createNewCar");

        cy.get("#addCarBrand").select(car.brand)

        cy.get("#addCarModel").select(car.model)

        cy.get("#addCarMileage").type(car.mileage);
        cy.contains('.modal-footer button.btn-primary', 'Add')
            .should('not.be.disabled')
            .click();

        cy.wait("@createNewCar").then(interception => {

            expect(interception.response.statusCode).to.equal(201);

            const body = interception.response.body.data;

            expect(body).to.have.property('brand', car.brand);
            expect(body).to.have.property('model', car.model);
            expect(body).to.have.property('mileage', car.mileage);
        });

    });

    // it("Creation of a car using API", ()=> {
    //
    //     const carData = {
    //         "carBrandId": 2,
    //         "carModelId": 8,
    //         "mileage": faker.number.int({ max: 1000 })
    //     }
    //
    //     cy.request( "POST","/api/cars", carData).then((response)=>{
    //         expect(response.status).to.eq(201)
    //     });
    //
    // })

});

