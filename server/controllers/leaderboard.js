module.exports = {

    teamvteam ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.get_challenges().then( challenges => {
            res.send( challenges )
        }).catch( console.log )
    },

    agentvagent ( req, res ) {
        const db = req.app.get( 'db' ) 
        let status = 200
        db.get_challenges2().then( challenges => {
            res.send( challenges )
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
        db.update_leaderboard( [req.params.id, req.body] ). then( response => {
            res.status( status ).send( response )
        })
    }

}