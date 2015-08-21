/*
// An example configuration file.
exports.config = {
  directConnect: true,
  chromeOnly: true,
  chromeDriver: 'node_modules/protractor/selenium/chromedriver',
  baseUrl: 'http://localhost:8080',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/e2e/!**!/!*.js'],

  // Options to be passed to Jasmin e.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
*/
exports.config = {

  chromeOnly: true,
  capabilities: {
    'browserName': 'chrome'
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:8080/',
  specs: ['test/e2e/**/*.js']
}