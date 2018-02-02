select * from badges
join reward_type on reward_type.id = badges.reward_type_id
where badge_type_id = 1
