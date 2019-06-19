#!/bin/bash
docker kill $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker run --rm -p 0.0.0.0:33306:3306 --name shipfmdb -v $PWD/mysql/logs:/logs -v $PWD/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
docker run --rm -p 127.0.0.1:16379:6379 --name shipfmredis -d redis:4
docker run --rm -p 27017:27017 --name shipfmmongo -v $PWD/mongodb:/data/db -d mongo:4
docker run --rm --hostname shipfm-rabbit --name shipfmrabbit -e RABBITMQ_DEFAULT_USER=shipfmrabbit -e RABBITMQ_DEFAULT_PASS=123456 -p 5672:5672 -p 15672:15672 -p 25672:25672 -d rabbitmq-delay