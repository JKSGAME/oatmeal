module.exports = {

    get_challenges ( req, res ) {
        const db = req.app.get( 'db' ) 
        db.get_challenges().then( challenges => {
            res.send( challenges )
        })
    },

    get_challenges_type ( req, res ) {
        const db = req.app.get( 'db' )
        db.get_challenge_type( [req.body] ).then( challenge_type => {
            res.send( challenge_type )
        })
    },

    create_challenge ( req, res ) {
        const db = req.app.get( 'db' )
        let { Name, Type, Team, TimeStart, TimeEnd, Desc, Mode, KPI, TargetValue, RewardValue, RewardDist } = req.body
        db.create_challenge([Name, Team, Type, Desc, TimeStart, TimeEnd, Mode, KPI, TargetValue, RewardValue, RewardDist]).then( challenge => {
            res.send( challenge )
        })
    },

    get_mode ( req, res ) {
        const db = req.app.get( 'db' )
        db.get_modes( [req.body] ).then( modes => {
            res.send( modes )
        })
    },

    get_kpi ( req, res ) {
        const db = req.app.get( 'db' )
        db.get_kpis( [req.body] ).then( kpis => {
            res.send( kpis )
        })
    }

}
