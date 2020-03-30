#!/bin/sh

cd /app
echo "INSTALLING dependencies..."
yarn install

yarn nodemon --config /nodemon.json
