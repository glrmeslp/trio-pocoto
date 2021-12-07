FROM node:14.15.4-alpine3.12

EXPOSE 8080

COPY ./dist /usr/app
COPY package.json /usr/app

WORKDIR /usr/app

ENTRYPOINT ["npm", "run", "start:prod"]