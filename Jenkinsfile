pipeline {
    agent{
        docker{
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages{
        stage('Build'){
            steps{
                sh 'node --version'
                sh 'npm --version'
                sh 'npm install'
               // sh 'npm run test'
               // sh 'npm run build'
            }
        }

    }

    }
}