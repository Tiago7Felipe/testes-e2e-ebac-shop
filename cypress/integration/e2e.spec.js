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
        var item = 'Abominable Hoodie'
        var tamanho = '.button-variable-item-L'
        var cor = '.button-variable-item-Green'
        cy.adicionarItem(item)
        cy.produtos(tamanho, cor)

        item = 'Aero Daily Fitness Tee'
        tamanho = '.button-variable-item-M'
        cor = '.button-variable-item-Yellow'
        cy.adicionarItem(item)
        cy.produtos(tamanho, cor)

        item = 'Apollo Running Short'
        tamanho = '.button-variable-item-36'
        cor = ':nth-child(2) > .value > .variable-items-wrapper > .variable-item'
        cy.adicionarItem(item)
        cy.produtos(tamanho, cor)

        item = 'Atlas Fitness Tank'
        tamanho = '.button-variable-item-S'
        cor = ':nth-child(2) > .value > .variable-items-wrapper > .variable-item'
        cy.adicionarItem(item)
        cy.produtos(tamanho, cor)

        //Validar quantidade adicionada ao carrinho
        var qnt = 4
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qnt)

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