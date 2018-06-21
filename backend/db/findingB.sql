DROP DATABASE IF EXISTS findingbas;
CREATE DATABASE findingbas;

\c findingbas

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  full_name VARCHAR NOT NULL,
  profile_quote VARCHAR,
  profile_pic_url VARCHAR DEFAULT ('https://png.icons8.com/windows/1600/owl.png'),
  create_profile text NOT NULL DEFAULT TO_CHAR(CURRENT_TIMESTAMP,'YYYYMM'),
  update_profile text NOT NULL DEFAULT TO_CHAR(CURRENT_TIMESTAMP,'YYYYMM')
);

CREATE TABLE photos (
  ID SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(ID),
  caption VARCHAR,
  hashtag VARCHAR,
  photo_url TEXT DEFAULT ('https://png.icons8.com/windows/1600/owl.png'),
  create_photo text NOT NULL DEFAULT TO_CHAR(CURRENT_TIMESTAMP,'YYYYMM'),
  update_photo text NOT NULL DEFAULT TO_CHAR(CURRENT_TIMESTAMP,'YYYYMM')
);


-- This table creates a many to one

CREATE TABLE bookmark (
    ID SERIAL PRIMARY KEY,
    photos_id INTEGER REFERENCES photos(ID),
    user_id INTEGER REFERENCES users(ID),
    create_bookmark text NOT NULL DEFAULT TO_CHAR(CURRENT_TIMESTAMP,'YYYYMM')
);

CREATE TABLE likes (
    ID SERIAL PRIMARY KEY,
    likes INTEGER,
    photos_id INTEGER REFERENCES photos(ID),
    user_id INTEGER REFERENCES users(ID),
    create_like text NOT NULL DEFAULT TO_CHAR(CURRENT_TIMESTAMP,'YYYYMM')
);

CREATE TABLE comments (
    ID SERIAL PRIMARY KEY,
    photos_id INTEGER REFERENCES photos(ID),
    user_id INTEGER REFERENCES users(ID),
    comments TEXT,
    create_comments text NOT NULL DEFAULT TO_CHAR(CURRENT_TIMESTAMP,'YYYYMM')
);

CREATE TABLE followers (
    ID SERIAL PRIMARY KEY,
    followers_id INTEGER REFERENCES users(ID),
    user_id INTEGER REFERENCES users(ID),
    time_start_followed text NOT NULL DEFAULT TO_CHAR(CURRENT_TIMESTAMP,'YYYYMM')
);

CREATE TABLE following (
    ID SERIAL PRIMARY KEY,
    following_id INTEGER REFERENCES users(ID),
    user_id INTEGER REFERENCES users(ID),
    time_start_following text NOT NULL DEFAULT TO_CHAR(CURRENT_TIMESTAMP,'YYYYMM')
);
