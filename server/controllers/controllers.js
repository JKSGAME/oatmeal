module.exports = {

    get_dashboard ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.get_dashboard().then( challenges => {
            res.status( status ).send( challenges )
        })
    },

    get_leaderboard ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.get_leaderboard( [req.params.id] ).then( leaderboard => {
            res.status( status ).send( leaderboard )
        })
    },

    get_user_info ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.getUser( [req.params.id] ).then( user =>{
            res.status( status ).send( user )
        })
    },

    create_challenge ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.createChallenge().then( challenge => {
            res.status( status ).send( 'Challenge Created' )
        })
    },

    get_challenges( req, res ) {
        const db = req.app.get( 'db' )
        db.get_challenge_type( [req.body] ).then( challenges => {
            res.send( challenges )
        })
    },

    get_users ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.getUsers().then( users => {
            res.status( status ).send( users )
        }).catch( console.log )
    }, 

    get_team_info ( req, res ) {
        const db = req.app.get( 'db' )
        db.get_teams( [req.body] ).then( teams => {
            res.send( teams )
        })
    },

    users_team_join ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.getUsers().then( users => {
            db.get_teams().then( team => {
                let response = [ users, team ]
                res.status( status ).send( response )
            })
        }).catch( console.log )
    }

}