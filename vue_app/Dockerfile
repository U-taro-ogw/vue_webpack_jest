FROM node:12.13.0-alpine

WORKDIR /vue_app

COPY package*.json ./

RUN npm install -g npm @vue/cli
COPY . ./

EXPOSE 8080

CMD [ "npm", "run", "dev" ]
