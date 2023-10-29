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

function saveNewLog(event) {
    const logTitle = document.querySelector('#new-log-title').value;
    const logText = document.querySelector('#new-log-text').value;

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
    
    document.querySelector('#new-log-name').value = "";
    document.querySelector('#new-log-text').value = "";
}

function eventListeners() {
    const newQuickNoteButton = document.getElementById("quick-note-button");
    newQuickNoteButton.addEventListener("click", newQuickNote);

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


document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
})