require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , session = require('express-session')
    , massive = require('massive')
    
const app = express();
    
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.DB_CONNECTION ).then( db => { app.set( 'db', db ) } )

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
}))

const controllers = require('./controllers/controllers')
//Get dashboard information with current challenges  UPDATE SQL FILE NAME WHEN STEVEN UPDATES THEM
app.get( '/api/dashboard', controllers.get_dashboard ) 


//Get leaderboard information  UPDATE SQL FILE NAME WHEN STEVEN COMPLETES THEM
app.get( '/api/leaderboard/:id', controllers.get_leaderboard )

//User Endpoints
app.get( '/api/user/:id', controllers.get_user_info )
app.get( '/api/users', controllers.get_users )

//Post new Challenges to db TOTALLY NEED TO REVIEW THIS NOT SURE ITS RIGHT
app.post( '/api/create', controllers.create_challenge )



app.listen(process.env.SERVER_PORT, () => { console.log(`listening on ${process.env.SERVER_PORT} ¯\_(ツ)_/¯ `) });

// exports = module.exports = app