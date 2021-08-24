var faker = require ('faker');
class Checkout {

    dadosCheckout(pais,uf,cep) {
        //Geração dados fakers
        let nome = faker.name.firstName();
        let sobrenome = faker.name.lastName();
        let empresa = faker.company.companyName();
        let email = faker.internet.email(nome);
        let endereco = faker.address.streetName();
        let numero = faker.random.number();
        let cidade = faker.address.cityName();
        let telefone = faker.phone.phoneNumberFormat();

        //comandos para preencher os campos do checkout
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click()
            .type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click()
            .type(uf).get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)

        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()

    }

}

export default new Checkout()