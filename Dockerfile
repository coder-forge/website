FROM node
MAINTAINER webeire@gmail.com

RUN mkdir /src
WORKDIR /src
ADD . /src

RUN npm install
RUN bower install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
