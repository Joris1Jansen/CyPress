// describe('Browser actions', () => {
//     it('should load correct url', () => {
//         cy.visit('http://example.com/', { timeout: 10000 })
//     })
//     it('should check correct url', () => {
//         cy.url().should('include', 'example.com')
//     })
//     it('should wait for 3 second', () => {
//         cy.wait(3000)
//     })
//     it('should pause the execution', () => {
//         cy.pause()
//     })
//     it('should check for correct element on the page', () => {
//         cy.get('h1').should('be.visible')
//     })
// })

describe('Browser actions', () => {
	it('should load books url', () => {
		cy.visit('https://books.toscrape.com/index.html', { timeout: 3000 })
		cy.url().should('include', 'index.html')
		cy.log('Before Reload')
		cy.reload()
		cy.log('After reload')
	})

	it('should click on Travel category', () => {
		cy.get('a').contains('Travel').click()
		cy.get('h1').contains('Travel')
	})

	it('should display correct numbers of book', () => {
		cy.get('.product_pod').its('length').should('eq', 11)
	})
})

describe('Check poetry book price', () => {
	it('should load books page', () => {
		cy.visit('http://books.toscrape.com/index.html')
		cy.url().should('include', 'index.html')
	})

	it('should click Poetry category', () => {
		cy.get('a').contains('Poetry').click()
		cy.get('.page-header').contains('Poetry')
	})

	it('should open Olio book', () => {
		cy.get('a ').contains('Olio')
	})

	it('should display correct price', () => {
		cy.get('.price_color').contains('23.88')
	})
})
