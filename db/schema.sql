CREATE TABLE users (
    user_id serial primary key,
    user_name VARCHAR(30),
    team_id TEXT,
    user_type_id INTEGER references user_type(id),
    has_permission BOOLEAN,
    photos TEXT
);

CREATE TABLE leaderboard (
    id serial primary key,
    challenge_id INTEGER references challenges(id),
    standings TEXT
);

CREATE TABLE user_type (
    id serial primary key,
    user_type VARCHAR(25)
);
INSERT INTO user_type (id, user_type) values
(default, 'User'), (default, 'Manager'), (default, 'Admin')

CREATE TABLE challenge_type (
    id serial primary key,
    challenge_type VARCHAR(50)
);
INSERT INTO challenge_type (id, challenge_type) values
(default, 'Agent v Agent'), (default, 'Team v Team')

CREATE TABLE team (
    id serial primary key,
    team VARCHAR(50)
);

CREATE TABLE challenges (
    id serial primary key,
    name VARCHAR(50),
    team_id TEXT,
    challenge_type_id INTEGER references challenge_type(id),
    description TEXT,
    duration_id INTEGER references duration(id),
    time_start TEXT,
    time_end TEXT,
    mode TEXT,
    kpi TEXT,
    value INTEGER,
    reward_value INTEGER,
    reward_distribution TEXT
);

CREATE TABLE duration (
    id serial primary key,
    duration TEXT
);
INSERT INTO duration (id, duration) values
(default, 'Daily'), (default, 'Weekly'), (default, 'Monthly'), (default, 'Yearly')

CREATE TABLE modes (
    id serial primary key,
    mode TEXT
);
INSERT INTO modes (id, mode) values
(default, 'Race'), (default, 'King of the Hill'), (default, 'Free For All')

CREATE TABLE kpi (
    id serial primary key,
    kpi TEXT
);
INSERT INTO kpi (id, kpi) values
(default, 'Dials'), (default, 'Sales')