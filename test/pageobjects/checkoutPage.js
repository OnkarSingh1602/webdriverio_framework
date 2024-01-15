class checkoutPage
{
    get itemPrice()
    {
        return $$('tr td :nth-child(4) strong')
    }
    get TotalAmount()
    {
        return $('h3 strong')
    }
    get checkout()
    {
        return $('[class="btn btn-success"]')
    }
    get continueShopping()
    {
        return $('[class="btn btn-default"]')
    }
    async  priceAdd()
     {
        const sum=0
        for (let i=0;i<this.itemPrice.length;i++)
        {  
            sum= sum+ parseInt(await this.itemPrice[i].getText())
        }
        return sum
     }
}
module.exports = new checkoutPage