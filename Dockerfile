MAINTAINER webeire@gmail.com
FROM node

RUN mkdir /src

COPY ./ /src
WORKDIR /src

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
