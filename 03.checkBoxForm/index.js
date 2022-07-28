const { Builder, By } = require('selenium-webdriver')

const driver = new Builder().forBrowser("chrome").build()

async function checkBoxForm() { 
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form")
        await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("my name")
        await driver.findElement(By.xpath("//input[@id='comment']")).sendKeys("this is a suite message")
        await driver.findElement(By.xpath("//input[@value='presidential-suite']/following::span")).click()
        await driver.findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span")).click()
        await driver.findElement(By.xpath("//button[@id='submit']")).click()

    } catch (error) {
        console.log(error)
    }
}

checkBoxForm()
