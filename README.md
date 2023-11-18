# startup

https://startup.starfield-starlog.click

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
- **WebSocket** - Used to send chat messages between users, broadcast comments/new entries to followers, broadcast when people are playing
- **React** - Will port application to React

## HTML Deliverable
For this deliverable I created the structure of my page using HTML

- **HTML Pages** - I created 5 starting pages that have the ability to login, view your logs, view others logs, and an about page.
- **Links** - The main page links to the log, about, and companion pages. The companion page will link to the companionLog page
- **Text** - I have text on all of my pages, specifically the about page.
- **Images** - I added an image on the about page and will hopefully have avatars in the companions.html.
- **3rd Party Servuices** - I added a placeholder for a weather API call.
- **Login** - Input box for username on index.html. 
- **Database** - Placeholders for logs I will retrieve from the database.
- **WebSocket** - I have placeholders for who is online and a chat ability.

## CSS Deliverable
For this deliverable I created the style of my page using CSS

- **Header, footer, and main content** - I have a header, footer, and main content that divides the sections on my pages.
- **Navigation Elements** - I have a styled navigation bar in my header.
- **Responsive to window sizing** - My page is responsive to window sizing of all devices.
- **Application Elements** - I have styled the login, log, companions, and about pages with good colors, contrast, whitespace and elements.
- **Application text content** - I have bootstrap font across my whole application and different font sizing for titles and such.
- **Application Images** - I have images and icons across my application.

## JavaScript Deliverable
For this deliverable I created the functionality of my page using JavaScript and made it interactive.

- **Login** - I have a login page that saves the username and password in local storage and redirects to the log page.
- **WebSocket** - I have a stand in notifications area, chat box, and online players area that will be populated with the WebSocket.
- **Database** - I have a function that is called when the log page is loaded that will retrieve the logs from the database and populate the page with them. I will have other functions with similar functionality for the other pages where loading info for certain users is needed.
- **Interactions** - I have many functions, listeners, and logic that makes my page interactive and allows users to save logs, quicknotes, chat with other users, and look at other users logs.


## Server Deliverable
For this deliverable I created the backend of my page using Node.js and Express. I implemented some endpoints I will use to store user data and serve it up to the frontend.

The Companions page lacks service support. The work for this deliverable is on the log, index, and about pages.

- **Node.js/Express** - I have a server.js file that creates a server and listens on port 4000.
- **Static Middleware for Frontend** - I have a static middleware that serves up the frontend files.
- **Calls to 3rd Party Services** - I have a call to the inspirational quote api that will be used to populate the about page.
- **Backend Endpoints** - I have a few endpoints that will be used to store and retrieve user logs and login.
- **Frontend Calls to Backend** - I have a few functions that will be used to call the backend endpoints and retrieve data. Used fetch.


## DB Deliverable
I implemented the same functionality I had with my server functions into a MongoDB database

- **MongoDB Atlas** - I have a MongoDB Atlas database that stores user data.
- **Endpoints for Data** - I have endpoints that receive user data and store it in the database and retrieve user data from the database.
- **Stores Data in DB** - My application data is stored in a MongoDB database.