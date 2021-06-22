#!/bin/sh

docker exec -it nut_api yarn;
docker exec -it nut_api yarn sequelize db:create
docker exec -it nut_api yarn sequelize db:migrate
docker exec -it nut_api yarn sequelize db:seed:all
exit
