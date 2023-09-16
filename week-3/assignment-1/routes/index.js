const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.pug');
})

router.get('/getData', (req,res) => {
    const query = req.query;
    let number = query.number;
    
    if(isNaN(number)){
        number = '';
    } else {
        number = parseInt(number);
    }
    console.log(`The type of number is ${typeof number} and its value is ${number}.`)

    let sum = 0;
    let countingDescription = '';
    for(i=1; i<=number ; i++){
        sum += i;
        if (i<number){
            countingDescription += `${i} + `;
        } else {
            countingDescription += `${i} = ${sum}`;
        }
    }

    console.log("Sum is: ", sum);
    console.log("Result is: ", countingDescription);

    res.render('getData.pug', {query, sum, countingDescription, number});
})

module.exports = router;