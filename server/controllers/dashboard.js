module.exports = {

    get_dashboard ( req, res ) {
        const db = req.app.get( 'db' )
        let status = 200
        db.get_dashboard().then( challenges => {
            res.status( status ).send( challenges )
        })
    }

}