FROM node:14.15.4-alpine3.12

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci --only=production

COPY dist ./

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start:prod"]