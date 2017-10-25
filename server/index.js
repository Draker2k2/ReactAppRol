const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

const endMw = require('express-end');

app.use(endMw);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// CONTROLLERS
app.use('/', require('./controllers'));

// app.listen(PORT, () => console.log(`Listen on http://localhost:${PORT}`));

function listen() {
  if (app.get('env') === 'test') return;
  app.listen(PORT);
  console.log(`Express app started on port ${PORT}`);
}

const DB = 'myproyect';
const PORTMONGOSE = 27017;

function connect() {
  return mongoose.connect(`mongodb://localhost:${PORTMONGOSE}/${DB}`).connection;
}

connect(`mongodb://localhost:${PORTMONGOSE}/${DB}`)
    .on('error', console.log)
    .on('disconected', connect)
    .once('open', listen);
