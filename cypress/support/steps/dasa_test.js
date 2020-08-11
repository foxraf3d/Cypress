// import * as homePage from '../support/page_objects/dasa_home_page';
// import * as nossasMarcas from '../support/page_objects/dasa_nossas_marcas';


// describe('Dado que eu acesso a site institucional Dasa', () => {
//     let Lab = 'img[alt="Delboni Auriemo"]'
//     homePage.visita();

//     it('Quando seleciono o link Nossas Marcas', () => {
//         homePage.sel_marcas();
//         nossasMarcas.imprime_labs_sp()
//         nossasMarcas.clicaLab(Lab);
//         nossasMarcas.valida_lab()
//         //homePage.clica_link_page_lab()
//         cy.get('.active > .content--overlay > .overlay--link > a').invoke('attr', 'href').then((hrefLink) => {
//             //console.log(values)
//             cy.request({
//                 method: 'GET',
//                 url: hrefLink,
//                 headers: {

//                 },
//                 body:
//                 {

//                 },
//                 resp: []
//             })
//                 .then((resp) => {
//                     expect(resp).property('status').to.equal(200)
//                     console.log(resp.body)


//                 })
//         })


//     });


// });

