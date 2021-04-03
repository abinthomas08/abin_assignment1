let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let phone = document.getElementById("phone");
let signupEmail = document.getElementById("signupEmail");
let inputPass = document.getElementById("pwd");
let inputConfPass = document.getElementById("pwd1");
let passStrLabel = document.getElementById("passStrLabel");
let confError = document.getElementById("confError");
let emailSignupError=document.getElementById("emailSignupError");
let gridCheck = document.getElementById("gridCheck");
//

let emailregexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let  numberRegex = /^([0-9]{3})([- \.]?)([0-9]{3})([- \.]?)([0-9]{4})$/ ;
// Login validation

function validateLogin()
{
    
    if(emailregexp.test(email.value))
    {
        return true;
    }
    else
    {
        alert(" Invalid Format! Please re-enter email address");
       email.style.border="2px solid red";
        return false;
    }
}

// SignUp Email
function validSignupEmail() 
    {
        if (emailregexp.test(signupEmail.value))
        {
            return true;
        }
        else
        {
            emailSignupError.innerHTML="Invalid Format! Please re-enter email address";
            signupEmail.style.border = "red 1px solid";
            return false;
        }
    }



//Phone Number

function validNumber()
{
        if (numberRegex.test(phone.value))
        {
            
            return true;
        }
        else
        {
           alert("Invalid Format! Please re-enter phone number.");
            phone.style.border = "red 3px solid"
            return false;
        }
}

//Password confirmation
function validConfPass()
{
    if (pwd1.value == pwd.value)
    {
        
        confError.innerHTML = "Passwords match!";
        inputConfPass.style.border = "";
        return true;
    }
    else
    {
        confError.innerHTML = "Passwords don't match!";
        inputConfPass.style.border = "red 3px solid";
        return false;
    }
}


function passStrength()
{   
    if (pwd.value.length<=9)
    {
        pwd.style.border = "red 1px solid";
        passStrLabel.style.color = "red";
        passStrLabel.innerHTML = "Weak Password!";
    }
    else if (pwd.value.length>9 && inputPass.value.length<=12)
    {
        pwd.style.border = "orange 1px solid";
        passStrLabel.style.color = "orange";
        passStrLabel.innerHTML = "Medium Password";
    }
    else if (pwd.value.length>12)
    {
        pwd.style.border = "green 1px solid";
        passStrLabel.style.color = "green";
        passStrLabel.innerHTML = "Strong Password!";
    }
    else
    {
        pwd.style.border = "";
        passStrLabel.innerHTML = "";
    }
}




function checkTerms()
{
    if (gridCheck.checked == false)
    {
        gridCheck.style.border = "red 1px solid";
    }
    return gridCheck.checked ? true : false
}








function validate()
{
    var a = validSignupEmail();
    var b = validNumber();
   
     var d = validConfPass();
     var e = checkTerms();
    if (a && b && d && e)
    {
    return true
    }
    else
    {
    return false
    }
}