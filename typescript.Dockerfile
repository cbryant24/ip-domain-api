FROM node:15.3.0-alpine3.10

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

EXPOSE 8080
