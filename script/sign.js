const email =document.getElementById("email");
const password =document.getElementById("password");
const sign = document.getElementById("signInInput");
console.log(sign);
var userxList=[]
const url = './home.html'
console.log(url);
if (localStorage.getItem("users")){
    userxList = JSON.parse(localStorage.getItem("users"));
    console.log(userxList);
    }

sign.addEventListener("click", function(){
    var flag = false
        for(let i = 0; i < userxList.length; i++){
            if(email.value == userxList[i].userEmail && password.value == userxList[i].userPassword){
                console.log("welcome home");
                flag = true;
            }

            }
       if (flag){
        console.log(url);
       navigate(url);
       }
       
          clearInput();  
    });


    function navigate(url)
    {
        try {
            window.location.href = url;
        } catch (error) {
            console.error("Failed to navigate:", error);
        }
   }
   
function clearInput(){
   
    email.value = null;
    password.value = null;
  }
   