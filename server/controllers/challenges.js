module.exports = {

    get_challenges ( req, res ) {
        const db = req.app.get( 'db' ) 
        db.get_challenges( [req.params.id] ).then( challenges => {
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
        let { Name, Type, Team, TimeStart, TimeEnd, Desc, Mode, KPI, TargetValue, RewardValue, RewardDist, Duration } = req.body
        db.create_challenge([Name, Team, Type, Desc, Duration, TimeStart, TimeEnd, Mode, KPI, TargetValue, RewardValue, RewardDist]).then( challenge => {
            console.log('challenge', challenge);
            let { Name } = req.body
            db.get_challenge_id_4_standing_obj( Name ).then( id => {
                console.log('id', id)
                let challenge_id = id[0].id
                let standingObj = {}
                db.create_standing_obj( challenge_id, standingObj ).then( standing => {
                    let response = [ challenge, standing, id ]
                    res.send( response )
                })
            })
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
    },

    get_durations ( req, res ) {
        const db = req.app.get( 'db' )
        db.get_duration( [req.body] ).then( duration => {
            res.send( duration )
        })
    }


}
