FROM node:10.15-alpine

COPY package*.json /tmp/
RUN cd /tmp && npm install

RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
COPY . /opt/app

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
