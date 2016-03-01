FROM node
MAINTAINER webeire@gmail.com

RUN mkdir /src \
  && mkdir /src/app \
  && mkdir /src/bin

COPY ./app /src/app
COPY ./bin /src/bin
COPY ./package.json /src/package.json

WORKDIR /src

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
