#!/bin/bash

docker exec -i db psql -d postgres -U postgres -c "CREATE USER root WITH PASSWORD 'apiuser' CREATEDB;";
exit
