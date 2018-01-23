select * from users
join team on cast(team.id as varchar(10)) = users.team_id
join user_type on user_type.id = users.user_type_id
join challenges on challenges.team_id = users.team_id;