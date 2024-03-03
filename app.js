const express = require('express');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');
const User = require('./models/user');
const Message = require('./models/message');
require('dotenv').config();

const app = express();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);
