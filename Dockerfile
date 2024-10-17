FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN yarn 

COPY . ./

COPY ./public/models ./public/models

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]   