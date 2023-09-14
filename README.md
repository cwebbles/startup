# startup

## Design

### Elevator Pitch

Do you get lost out there in the Starfield? Sidetracked by numerous quests and sidequests? Do you want a single place to keep track of all the things you want to do, and all the things you have done? Do you want to be able to share your adventures with your friends? Then you need the Starfield StarLog! With the Starfield StarLog you can keep track of the things you've done, the things you want to do, and share your adventures with your friends!

### Sketches

![sketches](https://github.com/cwebbles/startup/blob/dev/static/starlog.jpg)

### Key Features

-   Login over HTTPS
-   Create a new log entry
-   View a list of log entries
-   View a single log entry
-   Edit a log entry
-   Follow other explorers
-   View followed explorer's and their log entries
-   Comment and chat with other explorers

### Technologies

I am going to use the following technologies to build this app:

- **HTML** - The structure of the app. Probably three pages: Login, Entries, Explorers.
- **CSS** - The style of the app. I will make the StarLog look good and try to appear like a Starfield product.
- **JavaScript** - The functionality of the app. I will use JavaScript to allow the user to make entries, view entries, and follow other explorers.
- **Service** - The backend will be used to:
    - Login
    - Get/Post user information
    - Get/Post log entries
    - Get follower information
    - Get/Post comments
    - Store/Post chat messages
- **DB**
  - Used to store info that the frontend needs to access (i.e. user info, log entries, comments, chat messages)
- **Login** - Register and login, Creds in db, unable to access app without login
- **WebSocket** - Used to send chat messages between users, broadcast comments/new entries to followers
- **React** - Will port application to React