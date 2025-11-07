
describe("Footer buttons", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it("Footer buttons are visible and have links", () => {
        const socialLinks = [
            { name: 'facebook', url: 'https://www.facebook.com/Hillel.IT.School' },
            { name: 'telegram', url: 'https://t.me/ithillel_kyiv' },
            { name: 'instagram', url: 'https://www.instagram.com/hillel_itschool/' },
            { name: 'youtube', url: 'https://www.youtube.com/user/HillelITSchool' },
            { name: 'linkedin', url: 'https://www.linkedin.com/school/ithillel/' },
        ];

        socialLinks.forEach(item => {
            cy.get('.socials_link')
                .filter(`a[href*="${item.url}"]`)
                .should('exist')
                .and('be.visible');
        });
    })

    it("ItHillel site is present and visible", () => {
        cy.get('.display-4')
            .filter(`a[href*="https://ithillel.ua"]`)
            .should('exist')
            .and('be.visible');
    })

    it("Support email is present and visible", () => {
        cy.get('a[href*="mailto:developer@ithillel.ua"]')
            .should('exist')
            .and('be.visible');
    })
})