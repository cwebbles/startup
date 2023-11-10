const express = require('express');
const app = express();

const port = 4000;

app.use(express.json())

app.use(express.static('public'))

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/logs/:user', (req, res) => {
    console.log('GET /logs/:user hit...')
    const logs = getLog(req.params.user)
    console.log('log retrieved', logs)
    res.status(200).send(logs);
});

apiRouter.post('/logs/:user', (req, res) => {
    console.log('POST /logs/:user hit...')
    setLog(req.params.user, req.body)
    console.log('log updated')
    console.log('current Logs: ', logs)
    res.status(201).send();
});

apiRouter.post('/login', (req, res) => {
    console.log('POST /login hit...')
    const user = req.body.user
    const pass = req.body.pass
    login(user, pass)
    console.log('user logged in.', {user: user, pass: pass})
    res.status(201).send();
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.use(function (err, req, res, next) {
    if (err.message == 'Unknown user') {
        console.log('Unknown user error.')
        res.status(404)
    } else {
        console.log('Internal Server Error', err.message)
        res.status(500)
    }
    res.send({type: err.name, message: err.message})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let logs = []

function getLog(user) {
    let userLog = null
    logs.forEach((log) => {
        if (log.user == user) {
            userLog = log
        }
    })

    if (userLog == null) {
        throw new Error('Unknown user')
    }

    return userLog
}


function setLog(user, userLog) {
    let index = null
    logs.forEach((log, i) => {
        if (log.user == user) {
            index = i
        }
    })

    if (index == null) {
        logs.push(userLog)
    } else {
        logs[index] = userLog
    }
    
}

const users = []

function login(user, pass) {
    let userIndex = null
    users.forEach((u, i) => {
        if (u.user == user) {
            userIndex = i
        }
    })

    if (userIndex == null) {
        users.push({user: user, pass: pass})
        setLog(user, {
            user: user,
            logs: [],
            quickNotes: []
        })
    }

    return true
}
