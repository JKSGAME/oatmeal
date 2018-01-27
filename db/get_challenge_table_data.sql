select * from challenges
join team on cast(team.id as varchar(10)) = challenges.team_id
join challenge_type on challenge_type.id = challenges.challenge_type_id
join duration on duration.id = challenges.duration_id
join leaderboard on leaderboard.challenge_id = challenges.id;