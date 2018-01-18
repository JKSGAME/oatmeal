insert into challenges ( name,
    team_id,
    challenge_type_id,
    description,
    time_start,
    time_end,
    mode,
    kpi,
    value,
    reward_value,
    reward_distribution)
    values ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 )
    returning *;