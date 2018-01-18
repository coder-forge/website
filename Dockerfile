FROM mhart/alpine-node:latest

RUN apk add --no-cache git python make gcc g++

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
