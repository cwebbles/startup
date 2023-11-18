const { MongoClient } = require('mongodb');
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
    const query = { user: user };
    const cursor = userCollection.find(query);
    const result = await cursor.toArray();
    if (result.length == 0) {
        addUser(user, pass)
    }
    // TODO: Add password check
}

async function addUser(user, pass) {
    const result = await userCollection.insertOne({user: user, pass: pass})
    return result
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
    getLog
}
