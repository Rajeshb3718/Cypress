/// <reference types = "cypress"/>


describe('Validate login functionality', () =>
{
    it('Validate login with valid credentials', () =>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath("//input[@name='username']").type('Admin')
        cy.xpath("//input[@name='password']").type('admin123')
        cy.xpath("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();
        cy.xpath("//ul[@class='oxd-main-menu']/li").contains('Admin').click()
        cy.xpath("//nav[@class='oxd-topbar-body-nav']/ul/li").contains('Job ').click();
        cy.xpath("//ul[@class='oxd-dropdown-menu']/li").contains('Job Titles').click();
        
    })
})