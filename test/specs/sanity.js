const loginPage = require('../pageobjects/loginPage')
const shopPage = require('../pageobjects/shopPage')
const checkoutPage = require('../pageobjects/checkoutPage')
const purchasePage = require('../pageobjects/purchasePage')
//const expectchai = require ('chai').expect

describe("SanitySuite",async ()=>
{
    it("e2e buy 2 phones-  sanity ",async ()=>
    {
        await browser.url("loginpagePractise/")
        await loginPage.login("rahulshettyacademy","learning","User","Teacher")
        await shopPage.addProduct("Samsung Note 8","Blackberry")
        await shopPage.checkout.click()
        //await expectchai (await checkoutPage.priceAdd).to.equal(await checkoutPage.TotalAmount.getText())
        await checkoutPage.checkout.click()
        await purchasePage.setLocation('ind','India')
       await purchasePage.checkbox.click()
        await purchasePage.purchase.click()
        //sucess message
        await  browser.pause(3000)


    })

})