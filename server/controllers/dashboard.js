module.exports = {

    get_dashboard ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.get_dashboard().then( challenges => {
            res.status( status ).send( challenges )
        })
    },

    get_challenge_table( req, res ) {
        const db = req.app.get( 'db' )
        db.get_challenge_table_data( [req.body] ).then( challengeTable => {
            res.send( challengeTable )
        })
    }

}