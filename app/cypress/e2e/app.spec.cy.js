describe('App', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('devrait afficher le titre correct', () => {
		cy.contains('TP FINAL').should('be.visible');
	});

	it("devrait afficher le gestionnaire d'utilisateurs", () => {
		cy.contains('Users Manager').should('be.visible');
	});

	it("devrait changer le statut de l'utilisateur en admin", () => {
		cy.get('[data-testid=admin-switch]').click();
		cy.contains('Admin').should('be.visible');
	});
});
