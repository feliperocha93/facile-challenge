CREATE DATABASE facile_challenge;

CREATE TABLE IF NOT EXISTS names (
  id SERIAL,
  encrypted_name VARCHAR NOT NULL
);

CREATE DATABASE facile_challenge_prod;

CREATE TABLE IF NOT EXISTS names (
  id SERIAL,
  encrypted_name VARCHAR NOT NULL
);
