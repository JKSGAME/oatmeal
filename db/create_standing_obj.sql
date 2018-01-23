insert into leaderboard (id, challenge_id, standings) values (default, $1, $2)
returning *;