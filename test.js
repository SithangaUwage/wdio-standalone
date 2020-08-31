const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        // port: 9515,
        path: '/wd/hub',
        capabilities: {
            browserName: 'chrome'
        }
    });

    await browser.url('https://webdriver.io');
    
    const title = await browser.getTitle();
    console.log('Title was: ' + title);
    
    await browser.deleteSession();
})().catch((e) => console.error(e));