
describe('home page', () => {
  beforeEach('visit home page', () => {
    cy.visit('https://icy-cliff-0d86e3503.1.azurestaticapps.net/')
    cy.get('.navbar-toggler').click()
    cy.get('.Header_profile__rt0Qw').click()
    cy.get('.Header_dropMenu__FrtWt > :nth-child(2)').click()
  })

  // it('login', () => {
  //   cy.get('.navbar-toggler').click()
  //   cy.get('.Header_profile__rt0Qw').click()
  //   cy.get('.Header_dropMenu__FrtWt > :nth-child(2)').click()
  // })

  it('visit login', () => {
    // cy.get('.navbar-toggler').click()
    // cy.get('.Header_profile__rt0Qw').click()
    // cy.get('.Header_dropMenu__FrtWt > :nth-child(2)').click()
    cy.get('div.Authenticate_contentContainerAuthOptions__jH1CK span').click()

  })

  it('create account', () => {
    // cy.get('.Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO').click()
    cy.get('div.Authenticate_contentContainerAuthOptions__jH1CK span').click()
    cy.get('#email').type('marian.baitan@gmx.com')
    cy.get('#password').type('suceavamea')

  })


  it('forgot password', () => {
    // cy.get('.Authenticate_contentContainerButtons__i8q1y > .Button_button__JBBzO').click()
    cy.get(".Authenticate_textForgotPassword__Qw0dV").click()
    cy.get('.Button_button__JBBzO').click()

    // })

  })
})