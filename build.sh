#!/bin/bash
docker pull rabbitmq:3.7-management 
cd ./docker/rabbitmq-delayed/
docker build -t rabbitmq-delay .
