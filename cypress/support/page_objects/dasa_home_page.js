/// <reference types="Cypress"/>

class HomePage {

    visita() {
        cy.visit('/');
    }

    sel_marcas() {
        cy.get('.nav-item a[href="/marcas"]').click()
    }
}

export default HomePage;