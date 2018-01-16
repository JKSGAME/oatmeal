/* the purpose of this sql file is to pull all current leaderboards and display key information */

select name, challenge_type_id, mode, time_start, time_end, duration from challenges 
where id = $1