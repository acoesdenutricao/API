#!/bin/sh

docker exec -it nutapi yarn;
docker exec -it nutapi yarn sequelize db:create
docker exec -it nutapi yarn sequelize db:migrate
docker exec -it nutapi yarn sequelize db:seed:all
exit
