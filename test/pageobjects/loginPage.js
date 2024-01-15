class LoginPage
{
    get userName()
    {
        return $("#username")
    }
    get password()
    {
        return $("#password")
    }
    async userType(userType)
    {
        const radio =await $$('label[class="customradio"]')
      if (userType == "User")
      {
        await radio[1].click()
        await $("#cancelBtn").waitForDisplayed()
        await $("#okayBtn").click()
      }
      else 
      {
        await radio[0].click()
      }
    }
    async roleType(role)
    {
        await $('select[class="form-control"]').click()
        if (role == "Student")
        {
           await $('[value="stud"]').click()
        }
        else if (role == "Teacher")
        {
            await $('[value="teach"]').click()
        }
        else
        {
            await $('[value="consult"]').click()
        }
    }
    get term()
    {
        return $("#terms")
    }
    get signIn()
    {
        return $('#signInBtn')
    }
    async login(userName,password,userType,roleType)
    {
       await this.userName.setValue(userName)
       await this.password.setValue(password)
       await this.userType(userType)
       await this.roleType(roleType)
       await this.term.click()
       await this.signIn.click()
    }
}
module.exports=new LoginPage