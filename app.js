const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginBtnClick(){
    const value = loginInput.value;
    if(value === ""){
        console.log("please input your name");
    } 
    else if(value.length < 10) {
        console.log(value.length);
    }
}

loginButton.addEventListener("click", handleLoginBtnClick);