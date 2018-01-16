require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , session = require('express-session')
    , massive = require('massive')

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.DB_CONNECTION).then(db=>{app.set( 'db', db )})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
}))

//Get dashboard information with current challenges  UPDATE SQL FILE NAME WHEN STEVEN UPDATES THEM
app.get('api/dashboard', function(req, res){
    const db = app.get('db')
    db.getDashboard().then( challenges => {
        res.status(200).send( challenges )
    })
})


//Get leaderboard information  UPDATE SQL FILE NAME WHEN STEVEN COMPLETES THEM
app.get('api/leaderboard/:id', function(req, res){
    const db = app.get('db')
    db.getLeaderboard([req.params.id]).then( leaderboard => {
        res.status(200).send( leaderboard )
    })
})

//Get individual user information THIS WILL PROBABLY CHANGE SO THAT IT JUST DISPLAY USER INFO ON A CARD
app.get('api/user/:id', function (req,res){
    const db = app.get('db')
    db.getUser([req.params.id]).then( user =>{
        res.status(200).send( user )
    })
})

//Post new Challenges to db TOTALLY NEED TO REVIEW THIS NOT SURE ITS RIGHT
app.post('api/create', function (req, res){
    const db = app.get( 'db')
    db.createChallenge().then( challenge => {
        res.status(200).send( 'Challenge Created')
    })
})



app.list(process.env.SERVER_PORT, ()=>{console.log(`listening on ${process.env.SERVER_PORT} ¯\_(ツ)_/¯ `)});

exports = module.exports = app