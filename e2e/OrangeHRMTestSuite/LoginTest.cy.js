/// <reference types = "cypress"/>


describe('Validate login functionality', () =>
{
    it('Validate login with valid credentials', () =>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath("//input[@name='username']").type('Admin')
        cy.xpath("//input[@name='password']").type('admin123')
        cy.xpath("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();
    })
})