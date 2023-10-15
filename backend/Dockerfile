
FROM node:latest

RUN npm install -g npm@10.1.0
RUN mkdir -p /src

COPY package.json src/package.json

WORKDIR /src

RUN npm install --only=production --silent

COPY . /src

CMD npm start
