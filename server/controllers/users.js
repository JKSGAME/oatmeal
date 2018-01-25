module.exports = {

    get_user_info ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.get_user( [req.params.id] ).then( user =>{
            res.status( status ).send( user )
        })
    },

    users_dummy ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.get_users().then( users => {
            db.get_teams().then( team => {
                let response = [ users, team ]
                res.status( status ).send( response )
            })
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
        db.get_profile().then( profile => res.send( profile ) )
    },

    view_more ( req, res ) {
        const db = req.app.get( 'db' )
        db.view_more().then( data => res.send( data ) )
    }

}