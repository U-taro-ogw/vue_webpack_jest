FROM node:12.13.0-alpine

WORKDIR /vue_app

COPY package*.json ./

#RUN npm install -g @vue/cli webpack webpack-cli
#RUN npm install webpack-dev-server -g
RUN npm install @vue/cli
RUN npm install

COPY . ./

EXPOSE 8080

CMD [ "npm", "run", "dev" ]
