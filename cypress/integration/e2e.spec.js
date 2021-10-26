/// <reference types="cypress" />
import dadosCheckoutPage from '../support/page_objects/dadosCheckout.page'
const dadosCheckout = require('../fixtures/dadosCheckout.json');

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        //acessar a minha conta
        cy.visit('minha-conta')
        // Realizar login com os dados da fixture perfil, e metodos do comando login
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });


    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //Adicionando itens ao carrinho
        cy.produtos('Abominable Hoodie','L', 'Green')

        cy.produtos('Aero Daily Fitness Tee','M', 'Yellow')

        cy.produtos('Apollo Running Short','36', 'Black')

        cy.produtos('Atlas Fitness Tank','S', 'Blue')

        //Validar quantidade adicionada ao carrinho
        var qnt = 4
        //cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qnt)

        // Ir para o checkout
        cy.checkout();

        //Preencher dados do checkout, aquivo jason + pageObjects
        dadosCheckoutPage.dadosCheckout(
            dadosCheckout.pais,
            dadosCheckout.uf,
            dadosCheckout.cep
        )
        
        //Validando se o pedido foi realizado com sucesso
        
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });


})