require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , session = require('express-session')
    , massive = require('massive')
    , socket = require('socket.io')
    , S3 = require('./S3/S3')

const app = express();
    
app.use( bodyParser.json() );
app.use( cors() );

S3(app)

massive( process.env.DB_CONNECTION ).then( db => { app.set( 'db', db ) } )

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     saveUninitialized: true,
//     resave: false
// }))

const dashboardControllers = require( './controllers/dashboard' )
const challengesControllers = require( './controllers/challenges' )
const leaderboardControllers = require( './controllers/leaderboard' )
const usersControllers = require( './controllers/users' )

// Dashboard Endpoints
app.get( '/api/dashboard', dashboardControllers.get_dashboard ) // get all leaderboards for the dashboard
app.get( '/api/fullChallengeTable', dashboardControllers.get_challenge_table ) // gets all challenge info including joined tables

//Leaderboard Endpoints
app.get( '/api/leaderboard', leaderboardControllers.get_leaderboard ) // not using yet
app.get( '/api/teamvteam', leaderboardControllers.teamvteam )
app.get( '/api/agentvagent', leaderboardControllers.agentvagent ) // not using yet
app.put( '/api/leaderboard', leaderboardControllers.update_leaderboard)

// //User Endpoints
app.get( '/api/users', usersControllers.users_dummy )
app.get( '/api/users_joined', usersControllers.users_team_join )
app.get( '/api/user/:id', usersControllers.get_user_info ) // for specific user information
app.get( '/api/teams', usersControllers.get_team_info )

// //Challenge Endpoints
app.get( '/api/challenges', challengesControllers.get_challenges )
app.get( '/api/challenge_type', challengesControllers.get_challenges_type )
app.get( '/api/modes', challengesControllers.get_mode )
app.get( '/api/kpi', challengesControllers.get_kpi )
app.get( '/api/duration', challengesControllers.get_durations )
app.post( '/api/create', challengesControllers.create_challenge )


const io = socket ( app.listen ( process.env.SERVER_PORT, () => { console.log( `listening on ${process.env.SERVER_PORT} ¯\_(ツ)_/¯ ` ) } ) ) ;

// Will need to update sockets to connect with dummy data

io.on( 'connection', socket => {
    console.log( 'connection est. 2018' )

    socket.on( 'update standings', input => {
        console.log( input, "input" )
        socket.broadcast.emit( 'response', {standings: input} )

    })

})

// exports = module.exports = app