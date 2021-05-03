describe('Feedback test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.contains('Feedback').click()
	})

	it('should load feedback form', () => {
		cy.get('form').should('be.visible')
	})

	it('should fill feedback form', () => {
		cy.get('#name').type('Firstname')
		cy.get('#email').type('test@test.com')
		cy.get('#subject').type('I do not know')
		cy.get('#comment').type('I have a question')
	})

	it('should submit feedback form', () => {
		cy.contains('Send Message').click()
	})

	it('should display feedback message', () => {
		cy.get('#feedback-title').contains('Feedback')
	})
})
