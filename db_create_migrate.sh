#!/bin/sh

docker exec -i api npm install yarn && yarn sequelize db:create && yarn sequelize db:migrate;
exit
