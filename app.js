const Express = require('express');
const logger = require('morgan');
const path         = require('path');
const bodyParser = require('body-parser');


const home = require('./routes/home');

const app = Express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'));

app.use('/', home);


const PORT = 4545;
app.listen(PORT, function () { console.log(`Server listening on http://localhost:${PORT}`)})
