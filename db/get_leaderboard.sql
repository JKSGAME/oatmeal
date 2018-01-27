/* the purpose of this sql file is to pull specific leaderboards up to view */

select * from leaderboard where challenge_id = $1
