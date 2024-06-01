const username  =document.getElementById("username");
const email =document.getElementById("email");
const password =document.getElementById("password");
const confirmPassword =document.getElementById("confirmPassword");
const vform = document.getElementById("vform");
const newval = document.querySelectorAll(".form-control");
const register = document.getElementById("register");
const body = document.querySelector("body");
var userxList = [];
var regex ={
  userNameR: /^[a-zA-Z0-9_-]{3,}$/,
  emailR: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  passwordR: /^[a-zA-Z0-9_-]{3,}$/
  ,
}
///^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*?&])[A-Za-z\d@$%*?&]{8,}$
if (localStorage.getItem("users")){
userxList = JSON.parse(localStorage.getItem("users"));
console.log(userxList);
}

function validate(element){
  var inputType = element.name;
  var inputValue = element.value;

  if (inputType === 'username'){
    if (regex.userNameR.test(inputValue)){
      username.classList.add("is-valid");
      element.classList.remove("is-invalid");
      console.log("valid");
    
    }
    else
    {
      username.classList.remove("is-valid");
      username.classList.add("is-invalid");  console.log("invalid")
    }
  }
 
  if (inputType === "email"){
    if (regex.emailR.test(inputValue)){
      email.classList.add("is-valid");
      email.classList.remove("is-invalid");
      console.log("valid");
    }
    else
{
  email.classList.remove("is-valid");
  email.classList.add("is-invalid");  console.log("invalid")
}
  }
  if (inputType === "password"){
    if (regex.passwordR.test(inputValue)){
      var temp = inputValue;
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
      console.log("valid");
    }
    else
{
  element.classList.remove("is-valid");
  element.classList.add("is-invalid");  console.log("invalid")
}
  }

  if (inputType === "confirmPassword"){
  

    if (inputValue === password.value){
      console.log(password.value);
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
      console.log("valid");
    }
    else
{
  element.classList.remove("is-valid");
  element.classList.add("is-invalid");  console.log("invalid")
}
  }

}

console.log(newval);
newval.forEach((element)=>{
  console.log(element)
  element.addEventListener("input", function(){
   
   validate(element);
})})


register.addEventListener("click", function(event){
  event.preventDefault();
  let allValid = true;
  newval.forEach((element) => {
    if(!element.classList.contains("is-valid") || element.value == null){
      allValid = false;
      element.classList.add("is-invalid");
      console.log(element.value);
      return; 
    } });
    if (allValid){
      for(let i = 0; i < userxList.length; i++){
        if((email.value === userxList[i].userEmail || email.value === userxList[i].username)){
            console.log("user exists");
            Swal.fire({
              title: "user exist",
              text: "this name or email already have an account",
              icon: "question"
            });
            clearInput()
          return;
          }
          
        }

     addUser();
      
    clearInput();
     navigate();
    }
  console.log("wellcome");
});


function clearInput(){
  username.value = null;
  email.value = null;
  password.value = null;
  confirmPassword.value = null;
}


function addUser(){
  var users ={
    username : username.value,
    userPassword : password.value,
    userEmail: email.value,
  }
  userxList.push(users)
  localStorage.setItem('users', JSON.stringify(userxList));
  console.log(users)
}
 function navigate()
 {
  window.location.href = './main.html';
}
 
/** 
})
vform.addEventListener("input", function(){
if (regex.userNameR.test(username.value)){
  username.classList.add("is-valid");
  username.classList.remove("is-invalid");
  console.log("valid");
}
else
{
  username.classList.remove("is-valid");
  username.classList.add("is-invalid");  console.log("invalid")
}

if (regex.emailR.test(email.value)){
  email.classList.add("is-valid");
  email.classList.remove("is-invalid");
  console.log("valid");
}
else
{
  email.classList.remove("is-valid");
  email.classList.add("is-invalid");  console.log("invalid")
}

})*/
















/**
 * sweet alert format
 *  Swal.fire({
        title: "NOT VALID NAME",
        text: "please enter VALID NAME",
        icon: "question"
      });
 * 


      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
 */