const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: 'http://sonarqube:9000',
    options: {
      'sonar.login': '72cd5e76b17f55d84fd4bd864c3ed4b360fbfd92',
      'sonar.sources': 'src',
      'sonar.tests': '__tests__',
      'sonar.inclusions': '**', // Entry point of your code
      'sonar.exclusions': '**/migrations/**, **/seeders/**, **/server.js',
      'sonar.test.inclusions': 'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
      'sonar.javascript.lcov.reportPaths': '__tests__/coverage/lcov.info',
      'sonar.testExecutionReportPaths': '__tests__/coverage/clover.xml'
    }
  }, () => { });