const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const tvShowRouter = require('./tvShow/tvShowRouter');
const reviewRouter = require('./review/reviewRouter');
const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/tvshow',tvShowRouter);
app.use('/review',reviewRouter);

app.get('/', function (request,response){
	response.send('Hello World');
});

const port = 3000;
app.listen(port,() => {
	console.log(`Example app listening on port ${port}`);

})