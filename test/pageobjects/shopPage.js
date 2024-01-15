class shopPage
{
    get checkout()
    {
        return $("*=Checkout")
    }
    async addProduct(product1,product2)
    { 
        await this.checkout.waitForDisplayed()
        const products = await $$('[class="card h-100"]')

        for (let i=0;i<products.length;i++)
        {
            if ((await products[i].$('div h4 a').getText() == product1)||(await products[i].$('div h4 a').getText() == product2))
            {
               await  products[i].$('div button').click()
            }
        }
       

    }

}
module.exports = new shopPage()