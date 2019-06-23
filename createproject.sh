#!/bin/sh
echo "Wait for creating the skeleton folders..."
mkdir ./src
mkdir ./utils
mkdir ./dist
mkdir ./.vscode
mkdir ./tests

echo "Setup boilerplate..."
cp ./templates/app/src/server.js ./src/server.js
cp ./templates/app/src/routes.js ./src/routes.js
cp ./templates/app/utils/logger.js ./utils/logger.js
cp ./templates/app/utils/mongo_connect.js ./utils/mongo_connect.js
cp ./templates/app/package.json ./package.json
cp ./templates/.vscode/settings.json ./.vscode/settings.json
cp ./templates/app/.babelrc ./.babelrc
cp ./templates/Dockerfile ./Dockerfile
cp ./templates/jest.config.js ./jest.config.js
cp ./templates/app/.prettierrc ./.prettierrc
cp ./templates/app/.gitignore ./.gitignore
cp ./templates/tests/stub.js ./tests/index.test.js

echo "Setting up dependencies from NPM..."
npm i

echo "Removing unnecessary stuff..."
# rm -rf .git
# rm -rf templates
# rm README.md
# rm createproject.sh

echo "Initializing new git for you..."
# git init
# git add .
# git commit -m "Initial Commit"

echo "Done, happy developing!"