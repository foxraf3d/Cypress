/* global Given, Then, When */

import HomePage from '../page_objects/dasa_home_page'
const _homePage = new HomePage

import NossasMarcasPage from '../page_objects/dasa_nossas_marcas'
const _nossasMarcasPage = new NossasMarcasPage

let Lab = 'img[alt="Delboni Auriemo"]'

Given('que eu acesso a site institucional Dasa', () => {
    _homePage.visita();
})

When('seleciono o link Nossas Marcas', () => {
    _homePage.sel_marcas();
})

When('pesquiso laboratorio localizados em São Paulo', () => {
    _nossasMarcasPage.imprime_labs_sp()

})

When('seleciono o laboratorio Delboni Auriemo', () => {
    _nossasMarcasPage.clicaLab(Lab);
    _nossasMarcasPage.valida_lab()
})

Then('vejo que sou direcinado para o site do laboratorio Delboni Auriemo', () => {

    cy.get('.active > .content--overlay > .overlay--link > a').invoke('attr', 'href').then((hrefLink) => {
        //console.log(values)
        cy.request({
            method: 'GET',
            url: hrefLink,
            headers: {

            },
            body:
            {

            },
            resp: []
        })
            .then((resp) => {
                expect(resp).property('status').to.equal(200)
                console.log(resp.body)


            })
    })
})