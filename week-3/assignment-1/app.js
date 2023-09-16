const express = require('express')
const app = express();

//  Set pug as template rendering view engine
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('Hello My Server!');
})

app.get('/getData', (req,res) => {
    res.render('getData.pug');
})

app.listen(3000, ()=> {
    console.log("The application is running on localhost: 3000")
});