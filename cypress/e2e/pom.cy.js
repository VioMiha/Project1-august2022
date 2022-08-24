
import { LoginPage } from "./pages/login-page"

let loginpage = new LoginPage()


describe('All Login Tests', function () {

    beforeEach(function(){
        cy.visit('https://icy-cliff-0d86e3503.1.azurestaticapps.net/')

    })

     it('Loginwith valid credentials', function () {

        cy.get('.navbar-toggler').click()
        cy.get('.Header_profile__rt0Qw').click()
        cy.get('.Header_dropMenu__FrtWt > :nth-child(2)').click()
        //   cy.get('#email').type('marian.baitan@gmx.com')
        //   cy.get('#password').type('suceavamea')
        //   cy.get('.Button_primary__9MLUH').click()


        loginpage.enterUsername('marian.baitan@gmx.com')
        loginpage.enterPassword('suceavamea')
        loginpage.clickLogin()
        //cy.get('.Button_button__JBBzO')
    })


    it('Login with invalid username', function () {

        cy.get('.navbar-toggler').click()
        cy.get('.Header_profile__rt0Qw').click()
        cy.get('.Header_dropMenu__FrtWt > :nth-child(2)').click()
        //   cy.get('#email').type('marian.baitan@gmx.com')
        //   cy.get('#password').type('suceavamea')
        //   cy.get('.Button_primary__9MLUH').click()


        loginpage.enterUsername('marian.baitan.com')
        loginpage.enterPassword('suceavamea')
        loginpage.clickLogin()
        cy.get('.Button_button__JBBzO')

 })


    it('Login with invalid password', function () {

        cy.get('.navbar-toggler').click()
        cy.get('.Header_profile__rt0Qw').click()
        cy.get('.Header_dropMenu__FrtWt > :nth-child(2)').click()
        //   cy.get('#email').type('marian.baitan@gmx.com')
        //   cy.get('#password').type('suceavamea')
        //   cy.get('.Button_primary__9MLUH').click()


        loginpage.enterUsername('marian.baitan@gmx.com')
        loginpage.enterPassword('suceava1')
        loginpage.clickLogin()
        cy.get('.Button_button__JBBzO')



    })
})
