export class LoginPage{

   username_textbox = '#email'
   password_textbox = '#password'
   login_button = '.Button_primary__9MLUH'

   enterUsername(username){
    cy.get('#email').type(username)
}

   enterPassword(password){
    cy.get('#password').type(password)
}

   clickLogin(){
    cy.get('.Button_primary__9MLUH').click()
}

}