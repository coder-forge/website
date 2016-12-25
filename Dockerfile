FROM daithi/docker-emberjs

MAINTAINER "Daithi Coombes" <webeire@gmail.com>

# Workspace
RUN mkdir /app
WORKDIR /app
COPY . /app
# RUN npm install

CMD ["ember", "serve"]
