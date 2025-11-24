pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'react-scrutiny'
        DOCKER_TAG = "${BUILD_NUMBER}"
        CONTAINER_NAME = 'react-scrutiny-app'
        HOST_PORT = '3000'
        CONTAINER_PORT = '80'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                git branch: 'main', 
                    url: 'https://github.com/stormingrakesh45/react-scrutiny.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                }
            }
        }
        
        stage('Stop Old Container') {
            steps {
                echo 'Stopping and removing old container if exists...'
                script {
                    sh """
                        docker stop ${CONTAINER_NAME} || true
                        docker rm ${CONTAINER_NAME} || true
                    """
                }
            }
        }
        
        stage('Run Docker Container') {
            steps {
                echo 'Running new Docker container...'
                script {
                    sh """
                        docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${HOST_PORT}:${CONTAINER_PORT} \
                        ${DOCKER_IMAGE}:latest
                    """
                }
            }
        }
        
        stage('Clean Up Old Images') {
            steps {
                echo 'Cleaning up old Docker images...'
                script {
                    sh """
                        docker image prune -f
                    """
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
            echo "Application is running at http://localhost:${HOST_PORT}"
        }
        failure {
            echo 'Pipeline failed!'
        }
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}