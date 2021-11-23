pipeline {
    agent any

    stages {
        stage('Clonar o Repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/Tiago7Felipe/testes-e2e-ebac-shop.git'
            }
        }
                stage('instalar dependencias') {
            steps {
                powershell 'npm ci'
            }
        }
                stage('executar os testes') {
            steps {
                powershell 'npm run cy:run'
            }
        }
    }
}