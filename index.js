const puppeteer = require('puppeteer');
const locateChrome = require('locate-chrome');

(async () => {
  // OPTION 1 - Launch new.
 
  const browser = await puppeteer.launch({
    headless: true, // Puppeteer is 'headless' by default.
  });


  // OPTION 2 - Connect to existing.
  // MAC: /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=$(mktemp -d -t 'chrome-remote_data_dir')
  // PC: start chrome.exe –remote-debugging-port=9222
  // Note: this url changes each time the command is run.
  // const wsChromeEndpointUrl = 'ws://127.0.0.1:9222/devtools/browser/41a0b5f0-6747-446a-91b6-5ba30c87e951';
  // const browser = await puppeteer.connect({
  //     browserWSEndpoint: wsChromeEndpointUrl,
  // });

  const page = await browser.newPage();
  let pageUrl = 'https://mehrdad2003.github.io/testy/1.html';

  await page.goto(pageUrl, {
    waitUntil: 'networkidle0', // 'networkidle0' is very useful for SPAs.
  });

  await page.waitForTimeout(70000)

  

  browser.close();
})();