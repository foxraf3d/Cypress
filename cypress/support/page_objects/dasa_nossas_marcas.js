/// <reference types="Cypress"/>

class NossasMarcasPage {

    clica_busca() {
        cy.get('button.search-btn').click()
    }
    
    digita_uf(uf) {
        cy.get('#keys').type(uf)
    }
    
    imprime_labs_sp() {
        cy.get('#block-28 > .marca--list-wrap').each(function ($el, index, $list) {
    
    
            cy.wrap($el).find('.img-responsive').each(function ($el, index, $list) {
    
                cy.wrap($el).invoke('attr', 'alt').then((values) => {
    
                    console.log(values)
    
                })
    
            })
    
        })
    }
    
    clicaLab(Lab) {
        cy.get(Lab).click()
    }
    
    valida_lab() {
        cy.get('.active > .content--overlay > h2')
                .should('have.text', 'Delboni Auriemo')
    }
    
    clica_link_page_lab() {
        cy.get('.active > .content--overlay > .overlay--link > a')
                .click()
    }

}
export default NossasMarcasPage;