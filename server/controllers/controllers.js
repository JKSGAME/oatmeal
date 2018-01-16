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

    get_users ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.getUsers().then( users => {
            res.status( status ).send( users )
        }).catch( console.log )
    }

}   