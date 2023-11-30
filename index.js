const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const db = require('./database.js');
const { peerProxy } = require('./peerProxy.js');
const app = express();

const port = 4000;

app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.post('/auth/create', async (req, res) => {
    console.log('POST /auth/create hit...', req.body)
    if (await db.getUser(req.body.user)) {
        res.status(409).send()
    } else {
        const user = await db.addUser(req.body.user, req.body.pass)

        setAuthCookie(res, user.token);

        res.send({
            id: user._id
        })
    }
})

function setAuthCookie(res, authToken) {
    res.cookie('token', authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict'
    })
}

app.post('/auth/login', async (req, res) => {
    console.log('POST /auth/login hit...', req.body)
    const user = await db.getUser(req.body.user);
    if (user) {
        if (await bcrypt.compare(req.body.pass, user.pass)) {
            setAuthCookie(res, user.token);
            res.send({
                id: user._id
            })
            return;
        }
    }
    console.log('Incorrect username or password - Get out of my house!')
    res.status(401).send({ msg: 'Unauthorized' });
});

app.get('/user/me', async (req, res) => {
    authToken = req.cookies['token'];
    const user = await db.getUserByToken(authToken);
    if (user) {
        res.send({ username: user.user })
        return
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.get('/logs/:user', async (req, res) => {
    console.log('GET /logs/:user hit...')
    const logs = await db.getLog(req.params.user)
    if (!logs) {
        console.log('User has no logs')
        res.status(404).send()
    } else {
        console.log('log retrieved', logs)
        res.status(200).send(logs[0]);
    }
});

apiRouter.post('/logs/:user', async (req, res) => {
    console.log('POST /logs/:user hit...')
    await db.updateLog(req.params.user, req.body)
    console.log('log updated')
    res.status(201).send();
});

apiRouter.post('/login', async (req, res) => {
    console.log('POST /login hit...')
    const user = req.body.user
    const pass = req.body.pass
    await db.login(user, pass)
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

const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

peerProxy(httpService)
