FROM ubuntu:16:04

RUN mkdir /home/meteorapp
WORKDIR /home/meteorapp
ADD . ./meteorapp

RUN apt-get update -q && apt-get clean
# Get curl in order to download curl
RUN apt-get install curl -y \

  # Install Meteor
  && (curl https://install.meteor.com/ | sh) \

  #no longer need curl
  && apt-get --purge autoremove curl -y

RUN npm install -g forever

RUN bash /meteorapp/scripts/install_website.sh

EXPOSE 80
ENV PORT 80

#CMD ["forever", "--minUptime", "1000", "--spinSleepTime", "1000", "meteorapp/build/bundle/main.js"]
ENTRYPOINT bash /meteorapp/scripts/start.sh
