setInterval(() => {
    const chat = document.querySelector('#chat');
    chat.innerHTML =
      chat.innerHTML + `<p class="chat-message"><b style="color: dodgerblue">_xX_noob_Xx_:</b> No way! I've gotta do that. </p>`;
    if(Math.random() < 0.5) {
        const player_online = document.querySelector('#comp_1') 
        player_online.parentNode.removeChild(player_online);
    }
}, 5000);

function companionBoxListeners() {
    const companionBoxContainerChildren = document.querySelector("#companion-box-container").children;
    for(let i = 0; i < companionBoxContainerChildren.length; i++) {
        companionBoxContainerChildren[i].addEventListener("click", () => {
            const companionBoxContainer = document.querySelector("#companion-box-container")
            for(let j = 0; j < companionBoxContainer.children.length; j++) {
                companionBoxContainer.children[j].style.display = "none";
            }
            const companionName = companionBoxContainerChildren[i].querySelector(".companion-name").innerHTML;
            const companionInfo = document.querySelector("#companion-info");
            companionInfo.style.display = "block";
            companionInfo.querySelector("#companion-info-name").innerHTML = companionName;
        });
    }
}



function eventListeners() {

    companionBoxListeners();

    const closeCompanionInfo = document.querySelector("#close-companion-info-btn");
    closeCompanionInfo.addEventListener("click", () => {
        const companionBoxContainer = document.querySelector("#companion-box-container")
        for(let j = 0; j < companionBoxContainer.children.length; j++) {
            companionBoxContainer.children[j].style.display = "block";
        }
        const companionInfo = document.querySelector("#companion-info");
        companionInfo.style.display = "none";
    });
}


document.addEventListener('DOMContentLoaded', function() {
    checkActiveUsers
    eventListeners();
})

function checkActiveUsers() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (!username || !password) {
        window.location.href = "index.html";
    }
}
