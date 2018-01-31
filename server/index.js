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

S3( app )

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

// Leaderboard Endpoints
app.get( '/api/leaderboard/:id', leaderboardControllers.get_leaderboard ) // not using yet
app.get( '/api/teamvteam', leaderboardControllers.teamvteam )
app.get( '/api/agentvagent', leaderboardControllers.agentvagent ) // not using yet
app.put( '/api/updateleaderboard/:id', leaderboardControllers.update_leaderboard)

// User Endpoints
app.get( '/api/users', usersControllers.users_dummy ) // Done testing
app.get( '/api/users_joined', usersControllers.users_team_join ) 
app.get( '/api/user/:id', usersControllers.get_user_info ) // for specific user information, Done testing
app.get( '/api/teams', usersControllers.get_team_info ) // Done testing
app.get( '/api/viewmore/:id', usersControllers.view_more )

// Challenge Endpoints
app.get( '/api/challenges/:id', challengesControllers.get_challenges ) // Done testing
app.get( '/api/challenge_type', challengesControllers.get_challenges_type ) // Done testing
app.get( '/api/modes', challengesControllers.get_mode )
app.get( '/api/kpi', challengesControllers.get_kpi )
app.get( '/api/duration', challengesControllers.get_durations )
app.post( '/api/create', challengesControllers.create_challenge )

// Badges
app.post( '/api/create_achievement_badge', badgesControllers.create_achievement_badge )
app.post( 'api/create_trophy_badge', badgesControllers.create_trophy_badge )
app.get( '/api/get_achievement_scoreType', badgesControllers.get_achievement_scoreType )
app.get( '/api/get_reward_type', badgesControllers.get_reward_type )
app.get( '/api/get_trophies_scoreType', badgesControllers.get_trophies_scoreType )
app.get( '/api/get_trophies_subtype', badgesControllers.get_trophies_subtype )


const io = socket ( app.listen ( process.env.SERVER_PORT, () => { console.log( `listening on ${process.env.SERVER_PORT} ¯\_(ツ)_/¯ ` ) } ) ) ;

// Will need to update sockets to connect with dummy data

io.on( 'connection', socket => {
    console.log( 'connection est. 2018' )

    let room = ''
    socket.on( 'join room', data => {
        console.log( 'Room joined', data.room )
        room = data.room
        socket.join( room )
        io.to( room ).emit( 'room joined' )
    })

    socket.on( 'update standings', input => {
        console.log( input, "input" ) 
        io.to( room ).emit( 'response', {standings: input} )
    })


})

// exports = module.exports = app