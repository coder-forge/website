FROM daithi/docker-emberjs

MAINTAINER "Daithi Coombes" <webeire@gmail.com>

RUN npm install
RUN bower install

CMD ["ember", "serve"]
