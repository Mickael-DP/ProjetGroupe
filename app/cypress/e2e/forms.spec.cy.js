describe('Forms', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('devrait afficher le formulaire avec les champs vides', () => {
		cy.get('[data-testid=lastName]').should('have.value', '');
		cy.get('[data-testid=firstName]').should('have.value', '');
		cy.get('[data-testid=email]').should('have.value', '');
		cy.get('[data-testid=birthday]').should('have.value', '');
		cy.get('[data-testid=city]').should('have.value', '');
		cy.get('[data-testid=addressCode]').should('have.value', '');
	});

	it("devrait afficher un message de succès après l'envoi du formulaire", () => {
		cy.get('[data-testid=lastName]').type('Doe');
		cy.get('[data-testid=firstName]').type('John');
		cy.get('[data-testid=email]').type('john.doe@example.com');
		cy.get('[data-testid=birthday]').type('01/01/2000');
		cy.get('[data-testid=city]').type('Paris');
		cy.get('[data-testid=addressCode]').type('75001');
		cy.get('[data-testid=submit]').click();
		cy.contains('Formulaire envoyé avec succès').should('be.visible');
	});
});
