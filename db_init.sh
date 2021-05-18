#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "postgres" --dbname "postgres" <<-EOSQL
    CREATE USER root WITH PASSWORD 'apiuser' CREATEDB;
EOSQL
