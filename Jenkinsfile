pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/stormingrakesh45/react-scrutiny.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                docker run --rm -v "%cd%":/app -w /app node:20 npm install
                '''
            }
        }

        stage('Build React App') {
            steps {
                sh '''
                docker run --rm -v "%cd%":/app -w /app node:20 npm run build
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t react-scrutiny-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker rm -f react-scrutiny || true
                docker run -d -p 3000:80 --name react-scrutiny react-scrutiny-app
                '''
            }
        }
    }
}
