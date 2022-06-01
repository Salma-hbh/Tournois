const express = require('express');
const router = express.Router();

//Participant Model 
const Participant= require('../../models/participants');

//Get
router.get('/', (req,res)=>{
    Participant.find()
            .then( part=> res.json(part))
});

//POST
router.post('/', (req,res)=>{
    const newParticipants= new Participant({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        tournamentname: req.body.tournamentname,
        partner: req.body.partner,
        description: req.body.description
    })
    newParticipants.save()
                .then(tou=> res.json(tou))
})

module.exports= router;