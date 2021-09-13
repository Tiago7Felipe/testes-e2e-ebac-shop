# Testes End to End - Ebac Shop
### Exercício para os alunos de Qualidade de software da EBAC 

Ebac shop: http://lojaebac.ebaconline.art.br/

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto - você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/EBAC-QE/testes-e2e-ebac-shop.git
```
```
cd testes-e2e-ebac-shop
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para executar em moodo Headlesss via console:
```
npx cypress run
```

#### Para executar via Dashboard:
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.


### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/

-Faker: Biblioteca para geração de massa de dados: https://www.npmjs.com/package/faker


Cypress

Instalar o Node.JS
Ferramenta de dev - como o visual code

ES6 Mocha 
Bracket Pair Colorizer - deixa colorido o código
Cypress Snippets - 
Material Icon Theme - criar ícones pra pasta
Visual Studio IntelliCode - completa os trechos de código

Criar o projeto node → npm init -y (Dentro da pasta que queira) - controlador de pacotes e do projeto -- package.json
Instalar o Cypress → npm install cypress -D -  cria o node modules, tudo que será necessário para o projeto, dependência de diretórios
Abrir o Cypress → npx cypress open -  Abrir o open

suporte:  https://docs.cypress.io/guides/getting-started/installing-cypress

faker - npm install faker - para a geração de dados aleatórios
página faker - https://www.npmjs.com/package/faker



