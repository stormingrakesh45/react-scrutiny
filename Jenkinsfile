pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/stormingrakesh45/react-scrutiny.git'
            }
        }

        stage('Install Dependencies') {
            agent {
                docker {
                    image 'node:20'
                    args '-u root:root'
                }
            }
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            agent {
                docker {
                    image 'node:20'
                    args '-u root:root'
                }
            }
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t react-scrutiny-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:80 --name react-scrutiny react-scrutiny-app || true'
            }
        }
    }
}
