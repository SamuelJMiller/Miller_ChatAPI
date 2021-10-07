// Dependencies
let express = require('express');
let router = express.Router();
let fs = require('fs');

// Get current date
Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// Get current time
Date.prototype.timenow = function () {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

// Date object
let date = new Date();

router.get('/', (req, res) => {
    let rawdata = fs.readFileSync('data.json');
    let messages = JSON.parse(rawdata);

    console.log(messages);

    res.status(200).json(messages);
});

router.get('/:id', (req, res) => {
    let rawdata = fs.readFileSync('data.json');
    let messages = JSON.parse(rawdata);

    let id = req.params.id;

    console.log(messages[id]);

    res.status(200).json(messages[id]);
});

router.post('/', (req, res) => {
    try {
        console.log("Posted object is: ", req.body);
        // Open the file
        const rawdata = fs.readFileSync('data.json');
        // Decode the file
        let messages = JSON.parse(rawdata);

        let rawbody = req.body;

        let newmsg = {
            id: messages.length,
            name: null,
            message: null,
            channel: null,
            last_modified_at: date.today() + ' ' + date.timenow()
        };

        if (rawbody.name != null) {
            newmsg.name = rawbody.name;
        }

        if (rawbody.message != null) {
            newmsg.message = rawbody.message;
        }

        if (rawbody.channel != null) {
            newmsg.channel = rawbody.channel;
        }

        // Add new message
        messages.push(newmsg);

        // Write data back to file
        const data = fs.writeFileSync('data.json', JSON.stringify(messages));

        res.status(201).json({ message: "Success!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.patch('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;