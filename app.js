const express = require('express');
const indexRouter = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);

app.listen(3000);
