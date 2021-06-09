const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: 'http://sonarqube:9000',
    options: {
      'sonar.login': '08548a95f4891a13738d186fcced4fb2ea74671f',
      'sonar.sources': 'src',
      'sonar.tests': '__tests__',
      'sonar.inclusions': '**', // Entry point of your code
      'sonar.exclusions': '**/migrations/**, **/seeders/**, **/server.js',
      'sonar.test.inclusions': 'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
      'sonar.javascript.lcov.reportPaths': '__tests__/coverage/lcov.info',
      'sonar.testExecutionReportPaths': '__tests__/coverage/clover.xml'
    }
  }, () => { });