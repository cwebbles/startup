async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: username, pass: password})
    })
    if (response.status == 401) {
        alert("Incorrect username or password.")
        return;
    }
    localStorage.setItem("--TypingLength", (46 + username.length + 'ch').toString());
    window.location.href = "log.html";
}

async function signUp() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    const response = await fetch('/auth/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: username, pass: password})
    })
    localStorage.setItem("--TypingLength", (46 + username.length + 'ch').toString());
    window.location.href = "log.html";
}

function eventListeners() {
    const signinButton = document.getElementById("signIn");
    signinButton.addEventListener("click", login);

    const signUpButton = document.getElementById("signUp");
    signUpButton.addEventListener("click", signUp);


}

document.addEventListener('DOMContentLoaded', function() {
    clearActiveUsers();
    
    eventListeners();
})

function clearActiveUsers() {
    localStorage.setItem("username", '');
    localStorage.setItem("password", '');
}
