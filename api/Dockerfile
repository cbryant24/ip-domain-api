FROM node

# Create app directory
RUN mkdir -p /app/node/api
WORKDIR /app/node/api

# Install app dependencies
COPY package.json /app/node/api
COPY package-lock.json /app/node/api
RUN npm install

# Bundle app source
COPY . /app/node/api
RUN npm run build

EXPOSE 4000
CMD [ "npm", "start" ]