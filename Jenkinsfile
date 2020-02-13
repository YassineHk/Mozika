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
                sh 'docker build -t sparkdemo .'
            }
        }
        stage('run') {
            steps {
                sh 'docker rm -f spark'
                sh 'docker run --name spark -p 9090:80 -d sparkdemo'
            }
        }
    }
}
