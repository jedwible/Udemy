const { Builder, By, Key, util } = require('selenium-webdriver')
async function example() { 
    let driver = await new Builder().forBrowser("firefox").build()
    await driver.get("https://google.com")
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN)
}
example()