const { Builder, By } = require('selenium-webdriver')

const driver = new Builder().forBrowser("chrome").build()

async function openWebSite() { 
    try {
        await driver.get("https://rori4.github.io")
    } catch (error) {
        console.timeLog()
        console.log(error)
        
    }
}

async function simpleRegistration() { 
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration")
        await driver.findElement(By.name('email')).sendKeys("example@gmail.commm")
        await driver.findElement(By.id("password")).sendKeys("12345")
        await driver.findElement(By.name("submit")).click()
    } catch (error) {
        
    }
}

simpleRegistration()

