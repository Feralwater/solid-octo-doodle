FROM node:16-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /home/index

COPY . /home/index

WORKDIR /home/index

RUN npm install

CMD ["node", "index.js"]
