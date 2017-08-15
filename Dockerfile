## This Dockerfile Serves To Create A Dockerized
## Node Enviornment, Making Use of Dockers
## Cache Layers Hence Explaining The Copying
## And Installation of Dependencies Before
## Copying Source Code

FROM node:8.3.0

## Setting Working Directory To app/ ##
WORKDIR app/

## Copying And Installing Our Dependancy Files ##
COPY package.json .
COPY yarn.lock .
RUN yarn install

## Copy Source Code ##
COPY . .

EXPOSE 3000

CMD node app.js
