module.exports = {

    create_achievement_badge ( req, res ) {
        const db = req.app.get( 'db' )
        let { name, description, photo, score_type_id, score_target, reward_type_id, reward_value } = req.body
        db.create_achievement_badge( [name, description, photo, 1, score_type_id, null, score_target, reward_type_id, reward_value] ).then( badge => {
            res.send( badge )
        })
    },

    create_trophy_badge ( req, res ) {
        const db = req.app.get( 'db' ) 
        let { name, description, photo, score_type_id, score_subtype_id, score_target, reward_type_id, reward_value } = req.body
        db.create_trophy_badge( [name, description, photo, 2, score_type_id, score_subtype_id, score_target, reward_type_id, reward_value] ).then( badge => {
            res.send( badge )
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
    },

    get_achievement_badges ( req, res ) {
        const db = req.app.get( 'db' )
        db.get_achievement_badges( [req.body] ).then( badges => {
            res.send( badges )
        })
    },

    get_trophy_badges ( req, res ) {
        const db = req.app.get( 'db' )
        db.get_trophy_badges( [req.body] ).then( badges => {
            res.send( badges )
        })
    }

}
