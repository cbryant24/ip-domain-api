FROM node

# Create app directory
RUN mkdir -p /app/node/worker
WORKDIR /app/node/worker

# Install app dependencies
COPY package.json /app/node/worker
COPY package-lock.json /app/node/worker
RUN npm install

# Bundle app source
COPY . /app/node/worker
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]