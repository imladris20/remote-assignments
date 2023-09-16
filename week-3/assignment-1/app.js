const express = require('express')
const app = express();

//  Set pug as template rendering view engine
app.set('view engine', 'pug');

// Set routers
const mainRoutes = require('./routes/index.js');
app.use(mainRoutes);


// Set Server listener
app.listen(3000, ()=> {
    console.log("The application is running on localhost: 3000")
});