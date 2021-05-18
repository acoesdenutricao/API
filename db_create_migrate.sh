#!/bin/sh
docker exec -it api bash
npm install -g yarn
yarn sequelize db:create
yarn sequelize db:migrate
