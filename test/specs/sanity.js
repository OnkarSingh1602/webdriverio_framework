const loginPage = require('../pageobjects/loginPage')
const shopPage = require('../pageobjects/shopPage')
const checkoutPage = require('../pageobjects/checkoutPage')
const purchasePage = require('../pageobjects/purchasePage')
const protractorPage = require("../pageobjects/protractorPage")
//const expectchai = require('chai').expect

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
    it("Angular Form to be filled ",async()=>
    {
        await browser.url("/loginpagePractise/");
        await loginPage.login("rahulshettyacademy","learning","Admin","Consultant");
        await  shopPage.category("Category 1");
        await protractorPage.angularform("rahul","rahul@sheety.com","pass345","Female","Employed","18/03/2000");  

    })

})