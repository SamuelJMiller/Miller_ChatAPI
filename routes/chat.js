// Dependencies
let express = require('express');
let router = express.Router();
let fs = require('fs');

router.get('/', (req, res) => {
    let rawdata = fs.readFileSync('data.json');
    let messages = JSON.parse(rawdata);

    console.log(messages);

    res.status(200).json(messages);
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.patch('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;