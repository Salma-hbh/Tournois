const express = require('express');
const router = express.Router();

//Tournois Model 
const Tournois= require('../../models/tournois');
const Participants= require('../../models/participants');

//Get

router.get('/', (req,res)=>{
    Tournois.find()
            .then( tourn=> res.json(tourn));
    
});

//POST
router.post('/', (req,res)=>{
    const newTournois= new Tournois({
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        participant: PAR
    })
    newTournois.save()
                .then(tou=> res.json(tou))
})
router.get('/', (req,res)=>{
    Participants.find(part=>part.tournamentname == "Volley")
                .then(par=>res.json(par));        })


module.exports= router;