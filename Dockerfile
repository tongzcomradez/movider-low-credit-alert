FROM node:12-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install

EXPOSE 3000

CMD [ "npm", "start"]
