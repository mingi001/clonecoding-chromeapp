const loginForm = document.querySelector("#login-form")
const loginInput= document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME_KEY ="username"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `안녕 ${username}`;
    greeting.classList.remove(HIDDEN);
}

loginForm.addEventListener("submit",onLoginSubmit);

const savedname = localStorage.getItem(USERNAME_KEY);

if(savedname === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedname);
}