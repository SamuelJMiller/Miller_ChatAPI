// Get modules
let express = require('express');
let app = express();
let chatroutes = require('./routes/chat')
let morgan = require('morgan');

// Setup app
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(morgan('combined'));

// Endpoints
app.use('/', chatroutes);

// Start server
app.listen(80, () => {
    console.log('listening on port 80');
});