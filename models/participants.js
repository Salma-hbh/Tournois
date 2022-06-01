const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const Participant= new Schema({

    firstname:{
        type: String,
        //required: true
    },
    lastname:{
        type: String,
        //required: true
    },
    tournamentname:{
        type: String,
        //required: true
    },
    /*partner:{
        type: Boolean,
        //required: true
    },*/
    description:{
        type: String,
    },
    
});

module.exports= mongoose.model('Participants', Participant)