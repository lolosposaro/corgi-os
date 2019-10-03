FROM node:latest

WORKDIR /usr/src/app

ENV PORT 8
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

CMD npm start
