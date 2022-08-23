const cp = require('child_process');
const clientPlaywrightVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];
exports.config = {
  user: 'BROWSERSTACK_USERNAME',
  key: 'BROWSERSTACK_ACCESS_KEY',
  server: 'hub-cloud.browserstack.com',

  capabilities: [
    {
      'browser': "chrome",  // allowed browsers are `chrome`, `edge`, `playwright-chromium`, `playwright-firefox` and `playwright-webkit`
      'os': 'Windows',
      'os_version': '10',
      'name': 'conf1',
      'build': 'playwright-multi-conf',
      'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'YOUR_USERNAME',
      'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'YOUR_ACCESS_KEY',
     'clientPlaywrightVersion':clientPlaywrightVersion
       // Playwright version being used on your local project needs to be passed in this capability for BrowserStack to be able to map request and responses correctly
    },
    {
      'browser': "chrome",  // allowed browsers are `chrome`, `edge`, `playwright-chromium`, `playwright-firefox` and `playwright-webkit`
      'os': 'Windows',
      'os_version': '11',
      'name': 'conf1',
      'build': 'playwright-multi-conf',
      'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'YOUR_USERNAME',
      'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'YOUR_ACCESS_KEY',
     'clientPlaywrightVersion':clientPlaywrightVersion
       // Playwright version being used on your local project needs to be passed in this capability for BrowserStack to be able to map request and responses correctly
    },
    {
      'browser': "safari",  // allowed browsers are `chrome`, `edge`, `playwright-chromium`, `playwright-firefox` and `playwright-webkit`
      'os': '"OS X',
      'os_version': 'Big Sur',
      'name': 'conf1',
      'build': 'playwright-multi-conf',
      'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'YOUR_USERNAME',
      'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'YOUR_ACCESS_KEY',
     'clientPlaywrightVersion':clientPlaywrightVersion
       // Playwright version being used on your local project needs to be passed in this capability for BrowserStack to be able to map request and responses correctly
    }
  ]
}
