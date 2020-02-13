pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                   sh 'yarn install'
                   sh 'yarn build'
            }
        }
        stage('docker') {
            steps {
                sh 'docker -v'
                sh 'docker build -t sparkdemo'
            }
        }
        stage('run') {
            steps {
                echo 'docker run -p 9000:9000 sparkdemo'
            }
        }
    }
}
