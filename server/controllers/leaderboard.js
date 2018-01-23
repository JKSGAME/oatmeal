module.exports = {

    teamvteam ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.get_teams().then( team => {
            db.get_users().then( user => {
                db.get_challenges().then( challenges => {
                    let response = [ team, user, challenges ]
                    res.status( status ).send( response )
                })
            })
        }).catch( console.log )
    },

    agentvagent ( req, res ) {
        const db = req.app.get( 'db' ) 
        let status = 200
        db.get_teams().then( team => {
            db.get_users().then( user => {
                db.get_challenges().then( challenges => {
                    let response = [ team, user, challenges ]
                    res.status( status ).send( response )
                })
            })
        }).catch( console.log )
    },

    get_leaderboard ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.get_leaderboard( [req.params.id] ).then( leaderboard => {
            res.status( status ).send( leaderboard )
        })
    },

    update_leaderboard (req, res) {
        const db = req.app.get( 'db' )
        let status = 200
        console.log(req.body, "req.body")
        db.update_leaderboard([req.body]). then( response => {
            res.status( status ).send('Standings Updated')
        })
    }

}