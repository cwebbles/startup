function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("--TypingLength", (46 + username.length + 'ch').toString());
    window.location.href = "log.html";
}

function eventListeners() {
    const signinButton = document.getElementById("signIn");
    signinButton.addEventListener("click", login);
}

document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
})

