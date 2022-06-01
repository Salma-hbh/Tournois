const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');

const tournois=require('./routes/api/Tourn');
const participants = require('./routes/api/parts');

const app= express();

app.use(bodyParser.json());

//DB config
const db = require('./Confaccess/key1').mongoURI;

mongoose.connect(db)
        .then(()=> console.log('Connected...'))
        .catch( err=> console.log(err));

//Use routes
app.use('/tournois', tournois);
app.use('/participants', participants);


const port= 5000;
app.listen(port, ()=> console.log('Server started on port 5000'));