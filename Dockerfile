FROM node:8.11

RUN mkdir -p /app

WORKDIR /app

ADD package.json /app
ADD src/ /app

RUN npm install

CMD ["node", "app.js"]
