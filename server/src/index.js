const express = require('express');
const app = express();
const config = require('./config/config');

const cors = require('cors');

// симуляция получения данных по запросу к БД
const guestsArr = require('./store/guests');
const quizArr = require('./store/quiz');

app.use(cors())

async function start() {
    app.listen(config.port, () => {
        console.log('Server has been started...')
    })
}
start()

app.get('/response', (req, res) => {
    res.send([guestsArr, quizArr]);
})
