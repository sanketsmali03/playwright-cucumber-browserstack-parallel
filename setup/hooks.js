const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const cp = require('child_process');

setDefaultTimeout(60000)

var config_file = '../' + process.env.CONFIG_FILE;
var config = require(config_file).config;
// launch the browser
BeforeAll(async function () {
  var task_id = parseInt(process.env.TASK_ID || 0);
  var caps = config.capabilities[task_id];
  console.log("int the before hook")
  console.log(caps)
  global.browser = await chromium.connect({
    wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`
  });
  console.log("started the driver")
});

// close the browser
AfterAll(async function () {

   await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
  console.log('plsssss')
   global.context = await global.browser.newContext();
   global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
   await global.page.close();
   await global.context.close();
});
