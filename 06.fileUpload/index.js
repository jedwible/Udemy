const { Builder, By, Key } = require('selenium-webdriver');
const { findSafariDriver } = require('selenium-webdriver/safari');

const driver = new Builder().forBrowser("chrome").build()

async function iframeForm() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form")
        await driver.switchTo().frame(0)
        await driver.findElement(By.xpath("//*[@id='mG61Hd']")).sendKeys("random name")
        await driver.actions().sendKeys(Key.TAB).perform()
        await driver.actions().sendKeys(Key.chord(
            Key.ARROW_DOWN,
            Key.ARROW_DOWN,
            Key.ARROW_DOWN,
            Key.ARROW_DOWN)
        ).perform()
        await driver.actions().sendKeys(Key.chord(
            Key.TAB,
            Key.TAB)
        ).perform()
        await driver.actions().sendKeys(Key.chord(
            Key.ARROW_DOWN,
            Key.ARROW_DOWN,
            Key.ARROW_DOWN)
        ).perform()
        await driver.actions().sendKeys(Key.chord(Key.TAB, "26")).perform()
        await driver.actions().sendKeys(Key.chord(Key.TAB, "08")).perform()
        await driver.actions().sendKeys(Key.chord(Key.TAB, "1990")).perform()
        await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform()
        await driver.actions().sendKeys(Key.chord(Key.TAB, "super answer")).perform()
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform()

    } catch (error) {
        console.log(error)
    }

}

iframeForm()


