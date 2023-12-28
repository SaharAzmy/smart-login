
var userName=document.querySelector("#YourName")
var UserMail=document.querySelector("#yourMail")
var UserPassword=document.querySelector("#yourPassword")
var AddOrNewBtn=document.querySelector("#AddOrNewAbtn")
var ShowHidename=document.getElementById('ShowHidename')
var SignUpBtn1=document.getElementById('SignUpBtn')
var LoginBtn1=document.getElementById('LoginBtn')
var requiredData=document.getElementById('requiredData')
var mainFormDiv=document.getElementById('mainForm')
var successForm=document.getElementById('successForm')


var accountsList;


 
if (localStorage.getItem("accountsList"))
{
    accountsList=JSON.parse(localStorage.getItem("accountsList"))
  
}
else  {accountsList=[];}


//-- add new account --
function SignUpBtn()
{
if ((userName.value == "") || (UserMail.value == "") || (UserPassword.value == ""))
{
    requiredData.innerHTML = "All inputs is required";
    showElement(requiredData)
}
else 
{
    hideElement(requiredData)
    if (userExist(UserMail.value, UserPassword.value) )
             {
             
             requiredData.innerHTML = "email already exists " 
             showElement(requiredData)
            }
    else
    {        
        var currentAcc = 
            {
            name:userName.value,
            mail:UserMail.value,
            password:UserPassword.value,
            }
        accountsList.push(currentAcc) 
        clearInputs() 
        saveToLocalStorage()
    }
}
}


// --- login --- 
function LoginBtn()
{
if ( (UserMail.value == "") || (UserPassword.value == ""))
{
    requiredData.innerHTML = "All inputs is required";
    showElement(requiredData)
}
else
{
    hideElement(requiredData);
    if (userExist(UserMail.value, UserPassword.value) )
             {
             hideElement(mainFormDiv)
             successForm.innerHTML = "Welcome " + UserMail.value
             showElement(successForm)
            }
    else 
        {
         requiredData.innerHTML = "incorrect email or password";
         showElement(requiredData);
        }


    }
}

// --- signin or signup
function AddOrNewAcc(){
    if (AddOrNewBtn.innerHTML == "SignUp") 
    {    
        AddOrNewBtn.innerHTML = "SignIn";
        ShowHidename.classList.remove('d-none') ;       
        ShowHidename.classList.add('d-block')  ;
        SignUpBtn1.classList.remove('d-none') ;       
        SignUpBtn1.classList.add('d-block')  ;

        LoginBtn1.classList.remove('d-block')  ;
        LoginBtn1.classList.add('d-none')  ;

    }
else if (AddOrNewBtn.innerHTML == "SignIn")  
   {      
    AddOrNewBtn.innerHTML = "SignUp";
    ShowHidename.classList.remove('d-block') ;       
    ShowHidename.classList.add('d-none')  ;

    SignUpBtn1.classList.remove('d-block') ;       
    SignUpBtn1.classList.add('d-none')  ;
    LoginBtn1.classList.remove('d-none')  ;
    LoginBtn1.classList.add('d-block') ;
}        
    clearInputs() 


      }



    function clearInputs()
    {
        userName.value="",
        UserMail.value="",
        UserPassword.value=""
    }


    function saveToLocalStorage(){
        localStorage.setItem("accountsList",JSON.stringify(accountsList))
    }

 // ----  general ----

function showElement(targertElement)
{
    
    targertElement.classList.remove('d-none') ;       
    targertElement.classList.add('d-block')  ;

}
function hideElement(targertElement)
{
    
    targertElement.classList.remove('d-block') ;       
    targertElement.classList.add('d-none')  ;

}
function userExist(usermail,userpass)
{    
    for(var i=0; i<accountsList.length ; i++)
      if((accountsList[i].mail == usermail) && (accountsList[i].password == userpass))
             return true;         
         
    return false;
}
