class Info {
    constructor () {
        const usernameElement = document.querySelector('.username');
        usernameElement.value = localStorage.getItem('username');
    }
}

setInterval(() => {
    const notifications = document.querySelector('#log-notifications');
    notifications.innerHTML =
      notifications.innerHTML + `<li class="player-name list-group-item">Ada made a new log</div>`;
  }, 5000);

function newQuickNote (event) {
    const quickNoteText = []
    let allQuickNotes = document.querySelectorAll('#quick-note');
    allQuickNotes.forEach((quickNote) => {
        quickNoteText.push(quickNote.value);
    })

    const quickNotes = document.querySelector('#quick-notes');
    quickNotes.innerHTML =
      quickNotes.innerHTML + 
      `<div class="input-group mb-3" id="quick-note-4">
      <div class="input-group-text">
        <input class="form-check-input mt-0" type="checkbox" id="quick-note-checkbox" aria-label="Checkbox for following text input">
      </div>
      <input type="text" class="form-control" id="quick-note" aria-label="Text input with checkbox">
    </div>`;

    allQuickNotes = document.querySelectorAll('#quick-note');
    for(let i = 0; i < quickNoteText.length; i++) {
        allQuickNotes[i].value = quickNoteText[i];
    }

    checkboxListeners();
}

async function saveNewLog(logTitle = null, logText = null) {
    if (!logText) {
        logTitle = document.querySelector('#new-log-title').value;
        logText = document.querySelector('#new-log-text').value;
    }
    
    // Add new log tab to tab list
    const logTabs = document.querySelector('#log-tabs');
    const newLogTab = `<li class="nav-item" role="presentation"> 
                            <button class="nav-link" id="${logTitle}-log" data-bs-toggle="tab" data-bs-target="#${logTitle}" type="button" role="tab" aria-controls="${logTitle}" aria-selected="false">${logTitle}</button> 
                       </li>`
    logTabs.innerHTML = logTabs.innerHTML + newLogTab;

    // Add new log to tab content
    const logTabContent = document.querySelector('#log-tab-content');
    const newLog = `<div class="tab-pane fade show" id="${logTitle}" role="tabpanel" aria-labelledby="${logTitle}-tab">
                        <div class="mt-3 mb-3">
                            <h5 id="log-title">${logTitle}</h5>
                            <p id="log-text" style="width: 50%">${logText}</p>
                        </div>
                    </div>`
    logTabContent.innerHTML = newLog + logTabContent.innerHTML;
    
    document.querySelector('#new-log-title').value = "";
    document.querySelector('#new-log-text').value = "";

    await saveUserLogs();
}

function eventListeners() {
    const newQuickNoteButton = document.getElementById("quick-note-button");
    newQuickNoteButton.addEventListener("click", newQuickNote);

    const saveQuickNoteButton = document.getElementById("quick-note-save-button");
    saveQuickNoteButton.addEventListener("click", saveUserLogs);

    const newLogButton = document.getElementById("new-log-save-button");
    newLogButton.addEventListener("click", saveNewLog)

    checkboxListeners();

    // Assuming you have an HTML textbox with the id "myTextbox"
    const logTitleBox = document.getElementById("new-log-title");

    // Replace spaces with hyphens when the textbox content changes
    logTitleBox.addEventListener("input", function() {
        const updatedValue = this.value.replace(/\s+/g, "-");
        this.value = updatedValue;
    });
}

function checkboxListeners() {
    const removeQuickNoteCheckbox = document.querySelectorAll("#quick-note-checkbox");
    removeQuickNoteCheckbox.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const quickNote = checkbox.parentNode.parentNode;
            setTimeout(() => {
                quickNote.parentNode.removeChild(quickNote);
            }, 500);
        })
    })
}


document.addEventListener('DOMContentLoaded', async function() {
    checkActiveUsers();

    eventListeners();

    await loadUserLogs();

    loadQuickNotes();

    loadLogs();
})

function checkActiveUsers() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (!username || !password) {
        window.location.href = "index.html";
    }
}


async function saveUserLogs() {
    const user = localStorage.getItem('username')
    const quickNotes = document.querySelectorAll('#quick-note')
    const logs = document.querySelectorAll('#log-text')
    const logTitles = document.querySelectorAll('#log-title')
    const userLogs = {
        user: user,
        quickNotes: [],
        logs: []
    }

    quickNotes.forEach((note) => {
        userLogs.quickNotes.push(note.value)
    })

    for (let i = 0; i < logs.length; i++) {
        userLogs.logs.push({
            title: logTitles[i].innerHTML,
            text: logs[i].innerHTML
        })
    }

    try {
        
        const response = await fetch(`/api/logs/${user}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userLogs)
        })
        const result = await response.json()
        console.log(result)
    } catch (e) {
        console.log(e)
    }
}


async function loadUserLogs() {
    const user = localStorage.getItem('username')
    localStorage.removeItem('userLog')
    try {
        const response = await fetch(`/api/logs/${user}`)
        const userLog = await response.json()
        localStorage.setItem('userLog', JSON.stringify(userLog))
    } catch (e) {
        console.log(e)
        userLog = null
        localStorage.setItem('userLog', JSON.stringify(userLog))
    }
}

function loadLogs() {
    const userLogs = JSON.parse(localStorage.getItem('userLog'))
    if (userLogs) {
        userLogs.logs.forEach((log) => {
            saveNewLog(log.title, log.text)
        })
    }
}

function loadQuickNotes() {
    // This is where I will pull the quick notes from the database
    // I'll have a similar function for the logs

    let userQuickNotes = []
    const quickNotes = document.querySelector('#quick-notes');
    const userLog = JSON.parse(localStorage.getItem('userLog'))

    if (!userLog) {
        quickNotes.innerHTML = quickNotes.innerHTML + `<div class="input-group mb-3" id="quick-note-1">
                                                        <div class="input-group-text">
                                                            <input class="form-check-input mt-0" type="checkbox" id="quick-note-checkbox" aria-label="Checkbox for following text input">
                                                        </div>
                                                        <input type="text" class="form-control" id="quick-note" aria-label="Text input with checkbox" placeholder="Enter new Quick Note here!">
                                                        </div>`
    } else {
        if (userLog.quickNotes.length != 0) {
            userQuickNotes = userLog.quickNotes
    
            userQuickNotes.forEach((note) => {
                quickNotes.innerHTML = quickNotes.innerHTML + `<div class="input-group mb-3" id="quick-note-1">
                                                            <div class="input-group-text">
                                                                <input class="form-check-input mt-0" type="checkbox" id="quick-note-checkbox" aria-label="Checkbox for following text input">
                                                            </div>
                                                            <input type="text" class="form-control" id="quick-note" aria-label="Text input with checkbox" value="${note}">
                                                        </div>`
            })
        } else {
            quickNotes.innerHTML = quickNotes.innerHTML + `<div class="input-group mb-3" id="quick-note-1">
                                                            <div class="input-group-text">
                                                                <input class="form-check-input mt-0" type="checkbox" id="quick-note-checkbox" aria-label="Checkbox for following text input">
                                                            </div>
                                                            <input type="text" class="form-control" id="quick-note" aria-label="Text input with checkbox" placeholder="Enter new Quick Note here!">
                                                            </div>`
        }
    }
}
