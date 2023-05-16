const basicConfig = require('./wdio.conf');

exports.config = {
  ...basicConfig.config,
  // We only need to override the Chrome configuration of capabilities
  capabilities: [
    {
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage'],
      },
    },
  ],
};
