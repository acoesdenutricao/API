#!/bin/sh

docker exec -i api npm install -g yarn && yarn sequelize db:create && yarn sequelize db:migrate;
exit
