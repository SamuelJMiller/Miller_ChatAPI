// Dependencies
let express = require('express');
let router = express.Router();
let fs = require('fs');

router.get('/', (req, res) => {
    res.send('Success!');
});

module.exports = router;