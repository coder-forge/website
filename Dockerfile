FROM ubuntu

RUN mkdir /home/meteorapp
WORKDIR /home/meteorapp
ADD . ./meteorapp

RUN apt-get update -q && apt-get clean
# Get curl in order to download curl
RUN apt-get install curl -y \

  # Install Meteor
  && (curl https://install.meteor.com/ | sh) \

  #no longer need curl
  && apt-get --purge autoremove -y

RUN apt-get install git -y
ADD ./scripts /scripts
RUN bash /scripts/set_locales.sh
RUN bash /scripts/install_node.sh
RUN bash /scripts/install_website.sh

EXPOSE 3000
ENV PORT 80

#CMD ["forever", "--minUptime", "1000", "--spinSleepTime", "1000", "meteorapp/build/bundle/main.js"]
ENTRYPOINT bash /scripts/start.sh
