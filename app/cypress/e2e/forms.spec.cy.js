describe('Forms', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('devrait afficher le formulaire avec les champs vides', () => {
		cy.get('[data-testid=lastName]').should('have.value', '');
		cy.get('[data-testid=firstName]').should('have.value', '');
		cy.get('[data-testid=email]').should('have.value', '');
		cy.get('[data-testid=birthday]').should('have.value', '');
		cy.get('[data-testid=city]').should('have.value', '');
		cy.get('[data-testid=addressCode]').should('have.value', '');
	});

	it("devrait afficher un message d'erreur si le formulaire est soumis avec des champs vides", () => {
		cy.get('[data-testid=submit]').click();
		cy.contains('Veuillez remplir tous les champs.').should('be.visible');
	});

	it("devrait afficher un message d'erreur si le code postal n'est pas valide", () => {
		cy.get('[data-testid=addressCode]').type('123456');
		cy.get('[data-testid=submit]').click();
		cy.contains(
			'Le code postal doit être au format français (5 chiffres).'
		).should('be.visible');
	});

	it("devrait afficher un message d'erreur si l'email n'est pas valide", () => {
		cy.get('[data-testid=email]').type('emailincorrect');
		cy.get('[data-testid=submit]').click();
		cy.contains("L'email n'est pas valide").should('be.visible');
	});

	it("devrait afficher un message d'erreur si la date de naissance n'est pas valide", () => {
		cy.get('[data-testid=birthday]').type('01/01/2025');
		cy.get('[data-testid=submit]').click();
		cy.contains(
			"La date de naissance n'est pas valide. Assurez-vous d'avoir au moins 18 ans."
		).should('be.visible');
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
