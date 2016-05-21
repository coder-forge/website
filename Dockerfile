FROM node

MAINTAINER Daithi Coombes <webeire@gmail.com>

RUN apt-get update && \
  apt-get -y upgrade

RUN apt-get -y install git

RUN mkdir /scripts
RUN wget "https://install.meteor.com/" -O /scripts/installMeteor.sh
RUN chmod +x /scripts/installMeteor.sh
RUN /scripts/installMeteor.sh

# Set the locale
RUN apt-get update -qq && apt-get install -y locales -qq && locale-gen en_US.UTF-8 en_us && dpkg-reconfigure locales && dpkg-reconfigure locales && locale-gen C.UTF-8 && /usr/sbin/update-locale LANG=C.UTF-8
ENV LANG C.UTF-8
ENV LANGUAGE C.UTF-8
ENV LC_ALL C.UTF-8

COPY scripts/start.sh /scripts
RUN chmod +x /scripts/start.sh

RUN mkdir /app
RUN git clone https://github.com/coder-forge/website.git /app
VOLUME /app

EXPOSE 3000 3000

###
#
# 1. Volume of a default app
# 2. Run meteor as cmd

CMD ["/scripts/start.sh"]
