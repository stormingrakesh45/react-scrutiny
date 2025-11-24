pipeline{

    agent any

    stages{
        stage('Clone Repo'){
            steps{
                git branch: 'main', ur;"https://github.com/stormingrakesh45/react-scrutiny.git"
            }
        }

        stage('Install Dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage("Build React App"){
            steps{
                sh 'npm run build'
            }
        }

        stage('Build Docker Image'){
            steps{
                sh 'Docker build -t react-vite-app .'
            }

        }

        stage('Run Container'){
            steps{
                sh 'docker run -d -p 3000:80 --name react-container-scrutiny react-vite-app '
            }
        }
    }
}