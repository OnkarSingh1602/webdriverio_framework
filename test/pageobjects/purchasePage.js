class purchasePage
{
    get location()
    {
        return $("#country")
    }
    get selectLocation()
    {
        return $$("[class ='suggestions'] ul li a")
    }
    get checkbox()
    {
        return $("[for='checkbox2']")
    }
    get purchase()
    {
        return $("[value = 'Purchase']")
    }
    get loader()
    {
        return $("[class='lds-ellipsis']")
    }
    get sucessMsg()
    {
        return $('.alert-success')
    }
    async setLocation(partialLocation,Location)
    { 
        await this.location.setValue(partialLocation)
        await this.loader.waitForDisplayed({reverse:true})
        await console.log("*******5656565*******")
        await console.log(this.selectLocation.length)
        await console.log("**************")
        for (let i=0 ;i<this.selectLocation.length;i++)
        { 
            console.log(await this.selectLocation[i].getText())
           if(await this.selectLocation[i].getText()=== Location)
           {
            await this.selectLocation[i].click()
            await this.checkbox.waitForDisplayed()
           }
        }


    }

}
module.exports= new purchasePage()