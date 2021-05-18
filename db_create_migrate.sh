#!/bin/sh

docker exec -it api yarn;
docker exec -it api yarn sequelize db:create
docker exec -it api yarn sequelize db:migrate
exit
