require("dotenv").config();

const express = require('express');
//initialize express
const app = express();

//allows connections
const cors = require('cors');
app.use(cors());
const port = process.env.PORT||4000;

const searches = require('./routes/searches');

// Conection with MongoDB
require('./db/db')

app.use(express.json()); 
app.use('/api', searches);


app.listen(port, () => console.log( `Listening on port ${port}...` ));

module.exports = app