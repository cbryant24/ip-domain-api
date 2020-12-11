FROM node

# Create app directory
RUN mkdir -p /app/node/worker
WORKDIR /app/node/worker

# Install app dependencies
COPY package.json /app/node/worker
COPY package-lock.json /app/node/worker
RUN npm install --production
# Bundle app source


EXPOSE 3000
CMD [ "node", "dist/index.js" ]