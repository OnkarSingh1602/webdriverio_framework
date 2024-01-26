class protractorPage
{
    get name()
    {
        return $("input[minlength='2']");
    }
    get email()
    {
        return $("input[name='email']");
    }
    get  password()
    {
        return $("#exampleInputPassword1");
    }
    get iceCreamCheckBox()
    {
        return $("#exampleCheck1");
    }
    get submit()
    {
        return  $("[type='submit']");
    }
   get sucessmsg()
    { 
        return $("div strong");
        
    }
   async gender(gder)
    {
        const select = $$("select[class='form-control'] option");
        if (gder ==="Male")
        {
            await select[0].click();
        }
        else 
        {
            await select[1].click();
        }
    }    
    async employmentStatus(sts)
    {
            const empstatus = $$("[class='form-check form-check-inline']");
            if (sts === "Student")
            {
               await  empstatus[0].click();
            }
            else if (sts === "Employed")
            {
                await empstatus[1].click();
            }
            else 
            {
                await empstatus[2].click();
            }
    }
    async birthDay(date)
    {
            await $("[name='bday']").setValue(date);
    }

    async angularform(Name,Email,Password,Gnder,EmpSts,bday)
    {
            await this.name.waitForDisplayed()
            await  this.name.setValue(Name);
            await this.email.setValue(Email);
            await this.password.setValue(Password);
            await this.iceCreamCheckBox.click();
            await this.gender(Gnder);
            await this.employmentStatus(EmpSts);
            await this.birthDay(bday);
            await this.submit.click();
            await expect (this.sucessmsg).toHaveText("Success!")
           
    }
       

}

module.exports= new protractorPage();