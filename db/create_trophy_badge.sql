INSERT INTO badges (
    name,
    description,
    photo_id,
    badge_type_id,
    score_type_id,
    score_subtype_id,
    score_target,
    reward_type_id,
    reward_value
)
VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9 )
returning *;