const express = require('express');
const app = express();

const port = 4000;

app.use(express.json())

app.use(express.static('public'))

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/logs/:user', (req, res) => {
    console.log('/logs/:user hit...')
    const logs = getLog(req.params.user)
    console.log('log retrieved')
    res.send(logs);
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

let logs = [
    {
        user: 'user',
        logs: [
            {
                title: 'Sol',
                text: 'I explored Old Earth today...'
            },
            {
                title: 'Wolf',
                text: 'I explored the Wolf system today...'
            }
        ],
        quickNotes: [
            'Investigate Tau Ceti-I',
            'Investigate Eridiani-VI and explore abandoned mining facility'
        ]
    }
]

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
