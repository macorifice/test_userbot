FROM node:12-alpine
  
WORKDIR /node

COPY package*.json ./

RUN npm install && npm cache clean --force --loglevel=error

WORKDIR /node/app

COPY ./index.js index.js

CMD [ "node", "index.js"]