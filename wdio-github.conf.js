const basicConfig = require('./wdio.conf');
const child_process = require('child_process');

function systemSync(cmd) {
  return child_process.execSync(cmd).toString();
}

exports.config = {
  ...basicConfig.config,
  // We only need to override the Chrome configuration of capabilities
  capabilities: [
    {
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage'],
        binary: `${systemSync('which chrome')}`,
      },
    },
  ],
};
