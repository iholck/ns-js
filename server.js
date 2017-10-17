const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.get('/', function (request,response){
	response.send('Hello World');
});

const port = 3000;
app.listen(port,() => {
	console.log(`Example app listening on port ${port}`);

})