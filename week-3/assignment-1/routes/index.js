const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.pug');
});

router.get('/myName', (req,res) => {

    const {username} = req.cookies;
    console.log('nameoutput: ', username)
    // const username = 'polien';

    if (!username) {
        res.redirect('/trackName');
    } else {
        res.render('username.pug', {username});
    }    
});

router.get('/trackName', (req,res) => {
    const {username} = req.cookies;
    if (username){
        res.redirect('/myName')
    } else {
        res.render('trackname.pug')
    }
})

router.get('/getData', (req,res) => {
    const query = req.query;
    let number = query.number;
    let status = 'Lack of Parameter';
    let sum = 0;
    let countingDescription = '';

    console.log('Input: ', number);

    if(!number) {
        status = 'Lack of Parameter';
    } else if (isNaN(number) || parseInt(number)<=0 ) {
        status = 'Wrong Parameter! Please enter positive integer.'
    } else {
        number = parseInt(number);
        for(let i=1; i<=number ; i++){
            sum += i;
            if (i<number){
                countingDescription += `${i} + `;
            } else {
                countingDescription += `${i} = ${sum}`;
            }
        };
        status = 'Well Done!'
    }

    const result = {
        status,
        sum,
        countingDescription,
    }

    res.json(result)
})

router.post('/trackName', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/myName');
})

router.post('/clear', (req, res) => {
    res.clearCookie('username');
    res.redirect('/trackName');
})

module.exports = router;