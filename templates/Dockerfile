FROM node:10.15-alpine

# File Author / Maintainer
LABEL authors="Gadani Himan Gurusinga <gadanihiman@gmail.com>"

# Copy package.json into tmp directory
COPY package.json /tmp/package.json

# Install app dependencies
RUN cd /tmp && npm install

# Create new directory and copy the node_modules to this directory
RUN mkdir -p /www/app && cp -a /tmp/node_modules /www/app/

# Set the work directory to /www/app
WORKDIR /www/app

# Copy app source to the work directory
COPY . /www/app

# Build the project with build script (compile the script with babel)
RUN npm run build

# Expose the port to the world
EXPOSE 8080

# Start the project with start script
CMD ["npm", "start"]
