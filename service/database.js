const { MongoClient } = require('mongodb');
const uuid = require('uuid')
const bcrypt = require('bcrypt')
const config = require('./dbConfig.json')
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url)
let db = null;
let userCollection = null;
let logCollection = null;

(async function testConnection() {
    await client.connect();    
    db = client.db('startup')
    await db.command({ ping: 1 });
    userCollection = db.collection('users')
    logCollection = db.collection('logs')
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

async function login(user, pass) {
    const result = await getUser(user)
    if (result.length == 0) {
        // User does not exist
        // 404 Not Found
    } else {
        // User exists
        // Check password
        // 200 OK
    }
}

async function signUp(user, pass) {
    const result = await getUser(user)
    if (result.length == 0) {
        // User does not exist
        // Create user
        // 201 Created
    } else {
        // User exists
        // 409 Conflict
    }
}

async function getUser(user) {
    return userCollection.findOne({user: user})
}

async function getUserByToken(token) {
    return await userCollection.findOne({token: token});
}

async function addUser(username, pass) {
    const passwordHash = await bcrypt.hash(pass, 10);

    const user = {
        user: username,
        pass: passwordHash,
        token: uuid.v4()
    }

    await userCollection.insertOne(user)

    return user
}

async function updateLog(user, log) {
    const currLog = await getLog(log.user)
    if (!currLog) {
        await logCollection.insertOne(log)
    } else {
        await logCollection.replaceOne({
            user: log.user
        },
        {
            user: user,
            logs: log.logs,
            quickNotes: log.quickNotes
        })
    }
}

async function getLog(username) {
    const logs = await logCollection.find().toArray();
    const result = await logs.filter((log) => {
        return log.user == username
    })
    if (result.length == 0) {
        return null
    }
    return result
}

module.exports = {
    login,
    updateLog,
    getLog,
    addUser,
    getUser,
    getUserByToken
}
