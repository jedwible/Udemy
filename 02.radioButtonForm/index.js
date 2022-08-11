const { Builder, By } = require('selenium-webdriver')

const driver = new Builder().forBrowser("chrome").build()

async function radioButtonForm() { 
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form")
        await driver.findElement(By.css('#title')).sendKeys('ABCDEFCHIJKLJMONHDDKJAAAAA')
        await driver.findElement(By.css('#description')).sendKeys('Must be at least 20 characters')
        await driver.findElement(By.css('div:nth-child(1) > label > span.custom-control-description')).click()
        await driver.findElement(By.css('#submit')).click()
    } catch (error) {
        console.log(error)
    }
}

radioButtonForm()


