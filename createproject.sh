#!/bin/sh
echo "Wait for creating the skeleton folders..."
mkdir ./src
mkdir ./src/controllers
mkdir ./src/models
mkdir ./src/routes
mkdir ./src/services
mkdir ./utils
mkdir ./dist
mkdir ./.vscode
mkdir ./tests
mkdir ./docs

echo "Setup boilerplate..."
# src dir
# src - server
cp ./templates/app/src/server.js ./src/server.js
# src - controller
cp ./templates/app/src/controllers/userControllers.js ./src/controllers/userControllers.js
# src - models
cp ./templates/app/src/models/user.js ./src/models/user.js
# src - routes
cp ./templates/app/src/routes/index.routes.js ./src/routes/index.routes.js
cp ./templates/app/src/routes/users.routes.js ./src/routes/users.routes.js
# src - services
cp ./templates/app/src/services/user.services.js ./src/services/user.services.js
# utils dir
cp ./templates/app/utils/mongo_connect.js ./utils/mongo_connect.js
cp ./templates/app/utils/logger.js ./utils/logger.js
# tests dir
cp ./templates/app/tests/index.test.js ./tests/index.test.js
# others files
cp ./templates/.vscode/settings.json ./.vscode/settings.json
cp ./templates/app/package.json ./package.json
cp ./templates/app/.babelrc ./.babelrc
cp ./templates/app/.eslintrc.json ./.eslintrc.json
cp ./templates/Dockerfile ./Dockerfile
cp ./templates/app/.env.example ./.env.example
cp ./templates/app/.env.example ./.env
cp ./templates/jest.config.js ./jest.config.js
cp ./templates/app/.prettierrc ./.prettierrc
cp ./templates/app/.prettierignore ./.prettierignore
cp ./.gitignore ./.gitignore
cp ./README.md ./README.md

echo "Setting up dependencies from NPM..."
npm i

echo "Removing unnecessary stuff..."
rm -rf .git
rm -rf templates
rm README.md
rm createproject.sh

echo "Initializing new git for you..."
git init
git add .
git commit -m "Initial Commit"

echo "Done, happy developing!"
