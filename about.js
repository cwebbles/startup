document.addEventListener('DOMContentLoaded', function() {
    checkActiveUsers();
    getInspirationalQuote()
})

function getInspirationalQuote() {
    fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
            const quote = document.querySelector("#quote")
            quote.innerHTML = `<i>${data.content} Ad Astra...</i>`
        })
}

function checkActiveUsers() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (!username || !password) {
        window.location.href = "index.html";
    }
}
