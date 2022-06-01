const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const TournoisOrg= new Schema({

    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        format: '%Y-%m-%d',
        required: true,
    },
    time:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    participant:{
        type: String
    }
});

module.exports= mongoose.model('Tournois', TournoisOrg)