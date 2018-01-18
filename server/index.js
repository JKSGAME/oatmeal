require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , session = require('express-session')
    , massive = require('massive')
    , socket = require('socket.io')

const app = express();
    
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.DB_CONNECTION ).then( db => { app.set( 'db', db ) } )

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     saveUninitialized: true,
//     resave: false
// }))

const controllers = require('./controllers/controllers')

//Dashboard Endpoints
app.get( '/api/dashboard', controllers.get_dashboard ) 

//Leaderboard Endpoints
app.get( '/api/leaderboard/:id', controllers.get_leaderboard ) // not using yet
app.get( '/api/teamvteam', controllers.teamvteam )

//User Endpoints
app.get( '/api/users', controllers.users_team_join )
app.get( '/api/user/:id', controllers.get_user_info ) // for specific user information

//Challenge Endpoints
app.post( '/api/create', controllers.create_challenge )

// Getting Challenges from challenge_type table
app.get('/api/challenges', controllers.get_challenges)

// Get team information from Team table
app.get('/api/teams', controllers.get_team_info)

// Get Mode info from Mode table
app.get('/api/modes', controllers.get_mode)

// Get KPI info from KPI table
app.get('/api/kpi', controllers.get_kpi)


app.listen ( process.env.SERVER_PORT, ()=>{ console.log( `listening on ${process.env.SERVER_PORT} ¯\_(ツ)_/¯ ` ) } ) ;

// Will need to update sockets to connect with dummy data

// io.on('connection', socket => {
//     console.log('connection est. 2018')

//     socket.on('send message', input => {
//         socket.emit('response', { message:'Thank You' })
//     })
//     socket.on('another message', input => {
//         socket.emit('response', { message:'No really, send help' })
//     })
// })

// exports = module.exports = app