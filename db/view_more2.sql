select * from challenges
join team on cast(team.id as varchar(10)) = challenges.team_id
join users on users.team_id = challenges.team_id
join leaderboard on leaderboard.challenge_id = challenges.id
where challenges.id = 20;