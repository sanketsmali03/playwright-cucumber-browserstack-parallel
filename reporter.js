const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
            'App Version': '1.0.0',
            'Test Environment': 'DEV',
            Browser: 'Chrome ',
            Platform: 'MacOs',

    },
}


reporter.generate(options) 