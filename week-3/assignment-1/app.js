const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const app = express();

//  Set pug as template rendering view engine
app.set('view engine', 'pug');

//  Add body-parser and cookie-parser
app.use(bodyParser.urlencoded());
app.use(cookieParser());

// Set routers
const mainRoutes = require('./routes/index.js');
app.use(mainRoutes);

//  Add static files
app.use('/', express.static('public'));

//  Add error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
    console.log('Error Handler is being executed.');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error.pug');
})


// Set Server listener
app.listen(3000, ()=> {
    console.log("The application is running on localhost: 3000")
});