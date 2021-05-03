describe('Searchbox Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('should click the signin button', () => {
		cy.get('#signin_button').click()
	})

	it('should click on the forgotten password', () => {
		cy.get('.offset3 > a').click()
	})

	it('should fill the email form', () => {
		cy.get('#user_email').type('test@test.com')
	})

	it('should submit the form', () => {
		cy.contains('Send Password').click()
	})
})
