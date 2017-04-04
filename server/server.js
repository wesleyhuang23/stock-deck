const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');

let app = module.exports = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public/build'));


app.listen(3000, function(){
    console.log('listening on port 3000...')
})