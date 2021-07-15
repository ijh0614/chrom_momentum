//querySelector
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

//string variable
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//function set
function onSubmit(event){
    event.preventDefault();
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    makeGreetingText(username);
}

function makeGreetingText(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//event listener set
loginForm.addEventListener("submit",onSubmit);

// function start
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
} else {
    //show greeting
    loginForm.classList.add(HIDDEN_CLASSNAME);
    makeGreetingText(savedUsername);
}