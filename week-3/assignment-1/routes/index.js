const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.pug');
})

router.get('/getData', (req,res) => {
    res.render('getData.pug');
})

module.exports = router;