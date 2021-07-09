const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginBtnClick(){
    const value = loginInput.value;
    if(value === ""){
        console.log("please input your name");
    } 
    else if(value.length > 20) {
        console.log("name is too long");
    }
}

loginButton.addEventListener("click", handleLoginBtnClick);