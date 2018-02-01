CREATE TABLE badges (
    id serial primary key,
    name VARCHAR(50),
    description TEXT,
    photo_id INTEGER references photos(id),
    badge_type_id INTEGER references badge_type(id),
    score_type_id INTEGER references score_type(id),
    score_subtype_id INTEGER references score_subtype(id),
    score_target INTEGER,
    reward_type_id INTEGER references reward_type(id),
    reward_value INTEGER
);

CREATE TABLE photos (
    id serial primary key,
    photos TEXT
)

CREATE TABLE score_type (
    id serial primary key,
    score_type VARCHAR(50),
    badge_type_id INTEGER references badge_type(id)
);
INSERT INTO score_type (id, score_type, badge_type_id) VALUES
(default, 'Challenge', 2), (default, 'Mode', 2), (default, 'Duels', 2), (default, 'Dials', 1), (default, 'Sales', 1), (default, '# of Badges', 1), (default, '# of Achievements', 1), (default, '# of Trophies', 1), (default, 'Anniversary', 1)

CREATE TABLE score_subtype (
    id serial primary key,
    score_subtype VARCHAR(50)
);
INSERT INTO score_subtype (id, score_subtype) VALUES
(default, 'Challenge'), (default, 'Agent v Agent'), (default, 'Team v Team'),
(default, 'Race'), (default, 'King of the Hill'), (default, 'Free for All')

CREATE TABLE reward_type (
    id serial primary key,
    reward_type VARCHAR(50)
);
INSERT INTO reward_type (id, reward_type) VALUES
(default, 'Points'), (default, 'PTO')

CREATE TABLE badge_type (
    id serial primary key,
    badge_type VARCHAR(50)
);
INSERT INTO badge_type (id, badge_type) VALUES
(default, 'Achievement'), (default, 'Trophies')