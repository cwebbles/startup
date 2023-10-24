class Info {
    constructor () {
        const usernameElement = document.querySelector('.username');
        usernameElement.value = localStorage.getItem('username');
    }
}