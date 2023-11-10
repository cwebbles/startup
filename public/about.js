document.addEventListener('DOMContentLoaded', function() {
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
