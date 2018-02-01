module.exports = {

    create_achievement_badge ( req, res ) {
        const db = req.app.get( 'db' )
        let { Name, Description, Photo_id, Badge_Type_id, Score_Type_id, Score_Target, Reward_Type_id, Reward_Value } = req.body
        db.create_achievement_badge( [Name, Description, Photo_id, Badge_Type_id, Score_Type_id, Score_SubType_id, Score_Target, Reward_Type_id, Reward_Value] ).then( badge => {
            res.send( res )
        })
    },

    create_trophy_badge ( req, res ) {
        const db = req.app.get( 'db' ) 
        let { Name, Description, Photo_id, Badge_Type_id, Score_Type_id, Score_SubType_id, Score_Target, Reward_Type_id, Reward_Value } = req.body
        db.create_trophy_badge( [Name, Description, Photo_id, Badge_Type_id, Score_Type_id, Score_SubType_id, Score_Target, Reward_Type_id, Reward_Value] ).then( badge => {
            res.send( res )
        })
    },

    get_achievement_scoreType ( req, res ) {
        const db = req.app.get( 'db' )
        db.get_achievement_scoreType( [req.body] ).then( scoreType => {
            res.send( scoreType )
        })
    },

    get_reward_type ( req, res ) {
        const db = req.app.get( 'db' )
        db.get_reward_type( [req.body] ).then( rewardType => {
            res.send( rewardType )
        })
    },

    get_trophies_scoreType ( req, res ) {
        const db = req.app.get( 'db' )
        db.get_trophies_scoreType( [req.body] ).then( scoreType => {
            res.send( scoreType )
        })
    },

    get_trophies_subtype ( req, res ) {
        const db = req.app.get( 'db' )
        db.get_trophies_subtype( [req.body] ).then( subtype => {
            res.send( subtype )
        })
    },

    get_badge_photos ( req, res ) {
        const db = req.app.get( 'db' ) 
        db.get_badge_photos( [req.body] ).then( photos => {
            res.send( photos )
        })
    },

    get_badge_photo ( req, res ) {
        const db = req.app.get( 'db' ) 
        db.get_badge_photo( [req.body] ).then( photo => {
            res.send( photo )
        })
    }

}
