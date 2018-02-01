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
        const db = req.app.get( 'db' )  // make db connection
        let { Name, Type, Team, TimeStart, TimeEnd, Desc, Mode, KPI, TargetValue, RewardValue, RewardDist, Duration } = req.body  // list what value are coming from front end through req.body
        db.create_challenge([Name, Team, Type, Desc, Duration, TimeStart, TimeEnd, Mode, KPI, TargetValue, RewardValue, RewardDist]).then( challenge => {
            console.log('challenge', challenge);                                        // creating challenge and entering in data from req.body based on parameter on query
            let { Name } = req.body
            db.get_challenge_id_4_standing_obj( [Name] ).then( id => {
                console.log('id', id)                                                  // running a query to find the id of the challenge just created
                let challenge_id = id[0].id 
                let standingObj = { '1': { salesKPI: 0, dialsKPI: 0 },                // setting object to empty for all users
                '2': { salesKPI: 0, dialsKPI: 0 },
                '3': { salesKPI: 0, dialsKPI: 0 },
                '4': { salesKPI: 0, dialsKPI: 0 },
                '5': { salesKPI: 0, dialsKPI: 0 },
                '6': { salesKPI: 0, dialsKPI: 0 },
                '7': { salesKPI: 0, dialsKPI: 0 },
                '8': { salesKPI: 0, dialsKPI: 0 },
                '9': { salesKPI: 0, dialsKPI: 0 },
                '10': { salesKPI: 0, dialsKPI: 0 },
                '11': { salesKPI: 0, dialsKPI: 0 },
                '12': { salesKPI: 0, dialsKPI: 0 },
                '13': { salesKPI: 0, dialsKPI: 0 },
                '14': { salesKPI: 0, dialsKPI: 0 },
                '15': { salesKPI: 0, dialsKPI: 0 },
                '16': { salesKPI: 0, dialsKPI: 0 },
                '17': { salesKPI: 0, dialsKPI: 0 },
                '18': { salesKPI: 0, dialsKPI: 0 },
                '19': { salesKPI: 0, dialsKPI: 0 },
                '20': { salesKPI: 0, dialsKPI: 0 } }
                db.create_standing_obj( challenge_id, standingObj ).then( standing => {
                    let response = [ challenge, standing, id ]                                  // using id associated with challenge and creating a new standing object that has the same id.  This will hold all data changed on the crm when logged into this challenge. 
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
