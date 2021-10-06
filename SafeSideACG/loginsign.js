var loginbtn=document.getElementById("loginbtn");
var signupbtn=document.getElementById("signupbtn");
var logindiv=document.getElementById("Lcontainer");
var signupdiv=document.getElementById("Scontainer");

loginbtn.style.backgroundColor="#888"
signupdiv.style.display="none";

function login(){
  loginbtn.style.backgroundColor="#888"
  signupdiv.style.display="none";
  signupbtn.style.backgroundColor=""
  logindiv.style.display="block";

}

function signup(){
  signupbtn.style.backgroundColor="#888"
  logindiv.style.display="none";
  loginbtn.style.backgroundColor=""
  signupdiv.style.display="block";
}

function phonenumber(inputtxt)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if((inputtxt.value.match(phoneno)))
        {
      return true;
        }
      else
        {
        alert("Enter valid phone number/char.");
        return false;
        }
}


var n = localStorage.getItem('on_load_counter');

if (n === null) {
    n = 0;
}

n++;

localStorage.setItem("on_load_counter", n);

document.getElementById('CounterVisitor').innerHTML = n;
